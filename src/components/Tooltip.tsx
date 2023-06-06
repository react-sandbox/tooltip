import React from 'react'
import './styles/Tooltip.css'

type Position = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps {
  title: string
  position?: Position
  className?: string
  children: React.ReactNode
}

export const Tooltip = ({
  title,
  position = 'top',
  className = '',
  children
}: TooltipProps) => (
  <div className="wrapper">
    {children}
    <div
      className={`tooltip ${position} ${className}`}
      role="tooltip"
      // NOTE: Waiting on types resolution (ref: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/60822)
      // @ts-ignore
      inert="true"
    >
      <span>{title}</span>
    </div>
  </div>
)
