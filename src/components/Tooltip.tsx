import React, { memo } from 'react'
import { TooltipDivProps, TooltipProps } from '../types/Tooltip'
import styles from './styles/Tooltip.module.css'

function TooltipDiv({
  title,
  position,
  delay,
  disabled,
  className
}: TooltipDivProps) {
  return (
    <div
      className={`${styles.tooltip} ${styles[position ?? '']} ${
        styles[`delay-${delay}`]
      } ${className} ${disabled ? styles.hide : ''}`}
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
  children
}: TooltipProps) {
  return (
    <div className={styles.wrapper}>
      {children}
      <MemoizedTooltipDiv
        title={title}
        position={position}
        delay={delay}
        disabled={disabled}
        className={className}
      />
    </div>
  )
}
