/// <reference types="vite/client" />

type ResetGameParams = () => void

interface SquareProps {
  children: (string | number | null) | (JSX.Element | JSX.Element[]),
  index?: number
  isSelected?: boolean
  update?: (index: number) => void
}

interface ResultsProps {
  winner: string | null | false
  reset: ResetGameParams
}

interface RestartProps {
  title: string
  reset: ResetGameParams
} 

type Board = ('❌' | '⚪' | null)[]