'use client'

import React from 'react'

export interface SpoilerProps {
  title: string
  /**
   * Whether or not the spoiler should start expanded.
   * Defaults to false.
   */
  startExpanded?: boolean
  children?: React.ReactNode
}

const Spoiler = ({ children, title, startExpanded = false }: SpoilerProps): JSX.Element => {
  const [show, setShow] = React.useState(startExpanded)

  return (
    <div className="mb-4 rounded-md border-gray-100 bg-gray-50 dark:border-transparent dark:bg-gray-800 dark:bg-opacity-50">
      <p
        className="flex items-start p-4"
        role="button"
        tabIndex={0}
        onClick={() => setShow(!show)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setShow(!show)
          }
        }}
        style={{ marginBottom: 0 }}
      >
        {show ? (
          <svg
            className="mr-4 h-6 w-6 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            className="mr-4 h-6 w-6 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
        <span className="flex-1">{title}</span>
      </p>

      {show && <div className="px-4 py-2">{children}</div>}
    </div>
  )
}

export default Spoiler