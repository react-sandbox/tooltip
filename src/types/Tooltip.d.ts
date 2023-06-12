type Position = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  title: string
  position?: Position
  className?: string
  disabled?: boolean
  children: React.ReactNode
}
