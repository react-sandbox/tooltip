import React, { memo } from 'react'
import { TooltipDivProps, TooltipProps } from '../types/Tooltip'
import './styles/Tooltip.css'

function TooltipDiv({
  title,
  position,
  delay,
  disabled,
  className,
  style
}: TooltipDivProps) {
  return (
    <div
      data-sandbox-tooltip
      data-position={position}
      data-delay={delay}
      data-disabled={disabled}
      className={className}
      style={style}
      role="tooltip"
      // NOTE: Waiting on types resolution (ref: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/60822)
      // @ts-ignore
      inert="true"
    >
      <span>{title}</span>
    </div>
  )
}

const MemoizedTooltipDiv = memo(TooltipDiv)

export default function Tooltip({
  title,
  position = 'top',
  delay = 200,
  disabled = false,
  className = '',
  style,
  children
}: TooltipProps) {
  return (
    <div data-sandbox-tooltip-wrapper>
      {children}
      <MemoizedTooltipDiv
        title={title}
        position={position}
        delay={delay}
        disabled={disabled}
        className={className}
        style={style}
      />
    </div>
  )
}
