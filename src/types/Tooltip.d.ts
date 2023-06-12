type Position = 'top' | 'bottom' | 'left' | 'right'
type Delay = 0 | 100 | 200 | 300 | 400 | 500 | 750 | 1000

export interface TooltipProps {
  title: string
  position?: Position
  delay?: Delay
  className?: string
  disabled?: boolean
  children: React.ReactNode
}
