import React, { ReactNode } from 'react'
import cn from 'classnames'
import { DatGuiElementProps } from './index'

type DatRowProps = DatGuiElementProps & {
  label: string
  children: ReactNode
}

export default function DatRow({
  label,
  className = '',
  style,
  onClick,
  children,
}: DatRowProps) {
  return (
    <li className={cn('cr', className)} style={style} onClick={onClick}>
      <div>
        <span className="property-name">{label}</span>
        <div className="c">{children}</div>
      </div>
    </li>
  )
}
