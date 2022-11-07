import React, { cloneElement, ReactElement } from 'react'
import cn from 'classnames'
import { DatGuiElementProps } from './index'

type DatFolderProps = DatGuiElementProps & {
  title?: string
  children?: ReactElement | ReactElement[]
  [key: string]: any
}

export default function DatFolder({
  title = 'Folder',
  children,
  state,
  _onUpdateState,
  className,
  style,
  onClick,
  ...rest
}: DatFolderProps) {
  const closed = !!state[title]
  const toggleClose = () => {
    _onUpdateState({ [title]: !state[title] })
  }

  const renderChildren = () => {
    return (
      children &&
      React.Children.map(children, (child) =>
        cloneElement(child, { state, _onUpdateState, ...rest }),
      )
    )
  }

  return (
    <li className={cn('folder', className)} style={style} onClick={onClick}>
      <div className="dg">
        <ul className={cn({ closed })}>
          <li className="title" onClick={toggleClose}>
            {title}
          </li>
          {renderChildren()}
        </ul>
      </div>
    </li>
  )
}
