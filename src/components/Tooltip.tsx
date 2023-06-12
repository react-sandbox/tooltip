import React from 'react'
import { TooltipProps } from '../types/Tooltip'
import styles from './styles/Tooltip.module.css'

export default function Tooltip({
  title,
  position = 'top',
  className = '',
  children
}: TooltipProps) {
  return (
    <div className={styles.wrapper}>
      {children}
      <div
        className={`${styles.tooltip} ${styles[position]} ${className}`}
        role="tooltip"
        // NOTE: Waiting on types resolution (ref: https://github.com/DefinitelyTyped/DefinitelyTyped/pull/60822)
        // @ts-ignore
        inert="true"
      >
        <span>{title}</span>
      </div>
    </div>
  )
}
