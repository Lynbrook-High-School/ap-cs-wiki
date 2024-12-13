import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import Spoiler from './Spoiler'
import Quiz, { QuizQuestion, QuizMCAnswer } from './Quiz'
import Video from './Video'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  Spoiler,
  Quiz,
  QuizQuestion,
  QuizMCAnswer,
  Video,
}
