'use client'

import classNames from 'classnames'
import { atom, useAtom, useAtomValue, useSetAtom, useStore } from 'jotai'
import React, { useEffect } from 'react'

const finalAnswersAtom = atom<number[]>([])
const currentQuestionAtom = atom(0)
const selectedAnswerAtom = atom<number | null>(null)
const correctAnswersAtom = atom<number[]>([])
const submittedAtom = atom(false)

const handleSubmittedAnswerAtom = atom(null, (get, set, answerIndex: number) => {
  set(finalAnswersAtom, (prev) => {
    const index = get(currentQuestionAtom)
    const updatedAnswers = [...prev]
    updatedAnswers[index] = answerIndex
    return updatedAnswers
  })
})

const QuizAnswerExplanation = ({ children }: { children?: React.ReactNode }) => (
  <div className="no-y-margin text-sm text-gray-700 dark:text-gray-400">{children}</div>
)

const QuizMCAnswer = ({
  number,
  correct,
  children,
}: {
  number: number
  correct?: boolean
  children?: React.ReactNode
}) => {
  const store = useStore()
  const [selectedAnswer, setSelectedAnswer] = useAtom(selectedAnswerAtom, { store })
  const [submitted, setSubmittedValue] = useAtom(submittedAtom, { store })
  const correctAnswers = useAtomValue(correctAnswersAtom, { store })

  const isSelected = selectedAnswer === number
  const showVerdict = submitted && (isSelected || correctAnswers.includes(selectedAnswer ?? -1))
  const isCorrect = submitted && correctAnswers.includes(selectedAnswer ?? -1)
  const Element = isCorrect ? 'div' : 'button'

  return (
    <Element
      className="flex w-full items-start rounded-2xl bg-gray-100 px-4 py-3 text-left focus:outline-none dark:bg-gray-900"
      onClick={() => {
        if (!showVerdict) {
          if (selectedAnswer !== number) {
            setSelectedAnswer(number)
            setSubmittedValue(false)
          } else if (!submitted) {
            setSelectedAnswer(null)
          }
        }
      }}
    >
      <span
        className={classNames(
          'inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full font-medium',
          isSelected || showVerdict
            ? 'font-bold text-gray-100 ring-2 ring-offset-2 ring-offset-gray-100 dark:text-gray-900 dark:ring-offset-gray-900'
            : 'border border-gray-600 text-gray-800 dark:border-gray-500 dark:text-gray-300',
          showVerdict &&
            (correct
              ? 'bg-green-600 ring-green-600 dark:bg-green-300 dark:ring-green-300'
              : 'bg-red-600 ring-red-600 dark:bg-red-300 dark:ring-red-300'),
          isSelected &&
            !submitted &&
            'bg-gray-600 ring-gray-600 dark:bg-gray-300 dark:ring-gray-300'
        )}
      >
        {number + 1}
      </span>
      <div className="no-y-margin ml-3 flex-1">{children}</div>
    </Element>
  )
}

const QuizQuestion = ({ children }: { children: React.ReactNode }) => {
  const store = useStore()
  const setCorrectAnswers = useSetAtom(correctAnswersAtom, { store })

  useEffect(() => {
    const correctAnswers: number[] = []
    React.Children.forEach(children, (child, index) => {
      if (React.isValidElement(child) && child.props.correct) {
        correctAnswers.push(index)
      }
    })
    setCorrectAnswers(correctAnswers)
  }, [children, setCorrectAnswers])

  return <div className="space-y-2">{children}</div>
}

const Quiz = ({ children }: { children: React.ReactNode }) => {
  const store = useStore()
  const [currentQuestion, setCurrentQuestion] = useAtom(currentQuestionAtom, {
    store,
  })
  const [selectedAnswer, setSelectedAnswer] = useAtom(selectedAnswerAtom, {
    store,
  })
  const finalAnswers = useAtomValue(finalAnswersAtom, { store })
  const submitAnswer = useSetAtom(handleSubmittedAnswerAtom, { store })
  const [submitted, setSubmitted] = useAtom(submittedAtom, { store })
  const canMoveOn = submitted || selectedAnswer === null

  const handleQuestionChange = (newIndex: number) => {
    const newAnswer = finalAnswers[newIndex] ?? null
    setCurrentQuestion(newIndex)
    setSubmitted(newAnswer !== null)
    setSelectedAnswer(newAnswer)
  }

  const questions = React.Children.toArray(children)

  return (
    <div className="quiz">
      {questions[currentQuestion]}

      <div className="mt-4 flex items-center justify-between">
        <button
          className="btn flex items-center disabled:opacity-50"
          disabled={currentQuestion === 0}
          onClick={() => handleQuestionChange(currentQuestion - 1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="mr-2 size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          Previous
        </button>

        <span>
          Question {currentQuestion + 1} of {questions.length}
        </span>
        <button
          className="btn flex items-center disabled:opacity-50"
          disabled={canMoveOn && currentQuestion === questions.length - 1}
          onClick={() => {
            if (!canMoveOn) {
              submitAnswer(selectedAnswer!)
              setSubmitted(true)
            } else {
              handleQuestionChange(currentQuestion + 1)
            }
          }}
        >
          {selectedAnswer === null ? 'Skip' : submitted ? 'Next' : 'Submit'}{' '}
          {canMoveOn && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  )
}

export default Quiz
export { QuizQuestion, QuizMCAnswer, QuizAnswerExplanation }
