type Position = 'top' | 'bottom' | 'left' | 'right'
type Delay = 0 | 100 | 200 | 300 | 400 | 500 | 750 | 1000

export interface TooltipProps {
  title: string
  position?: Position
  delay?: Delay
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export type TooltipDivProps = Pick<
  TooltipProps,
  'title' | 'position' | 'delay' | 'disabled' | 'className'
>
