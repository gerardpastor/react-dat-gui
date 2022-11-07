import './dat.gui.css'
import React, {
  cloneElement,
  CSSProperties,
  MouseEventHandler,
  ReactElement,
  useEffect,
} from 'react'
import cn from 'classnames'
import { set, cloneDeep, merge } from 'lodash'
import useLocalStorageState from 'use-local-storage-state'

export type DataType = { [key: string]: any }
export type StateType = { [key: string]: any }

export type DatGuiElementProps = {
  style?: CSSProperties
  className?: any
  onClick?: MouseEventHandler
}

type DatGuiProps = DatGuiElementProps & {
  name?: string
  hideable?: boolean
  closed?: boolean
  closeOnTop?: boolean

  data: DataType
  onUpdate: (
    data: DataType,
  ) => void | ((cb: (data: DataType) => DataType) => void)

  children?: ReactElement | ReactElement[]
}

export interface DatGuiControl extends DatGuiElementProps {
  path: string
  label?: string
  onUpdate?: (value: any) => void
  [key: string]: any
}

type DatGuiState = {
  [key: string]: boolean
}

export default function DatGui({
  hideable = true,
  closed: defaultClosed = false,
  closeOnTop,
  data,
  onUpdate,
  children,
  style,
  className,
  onClick,
}: DatGuiProps) {
  const [storedData, setStoredData] = useLocalStorageState<any>('dat.gui.data')
  const [state, setState] = useLocalStorageState<DatGuiState>('dat.gui.state', {
    defaultValue: {},
  })
  const closed = state['root'] ?? defaultClosed
  const width = '245px'

  const _onUpdateValue = (path: string, value: any) => {
    const newData = set(cloneDeep(data), path, value)
    onUpdate(newData)
    setStoredData(newData)
  }

  const _onUpdateState = (state: StateType) => {
    setState((oldState: StateType) => ({ ...oldState, ...state }))
  }

  const toggleClosed = () => {
    setState((oldState: StateType) => ({
      ...oldState,
      root: !oldState['root'],
    }))
  }

  useEffect(() => {
    if (!storedData) return
    const mergedData = merge({}, data, storedData)
    onUpdate(storedData)
    setStoredData(mergedData)
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (hideable && e.key === 'h' && e.target === document.body)
        toggleClosed()
    }

    hideable && window.addEventListener('keypress', handler)

    return () => {
      window.removeEventListener('keypress', handler)
    }
  }, [hideable])

  const renderChildren = () => {
    return (
      children &&
      React.Children.map(children, (child) =>
        cloneElement(child, { data, _onUpdateValue, state, _onUpdateState }),
      )
    )
  }

  const closeButton = (
    <div
      className={cn('close-button', closeOnTop ? 'close-top' : 'close-bottom')}
      style={{ width }}
      onClick={toggleClosed}
    >
      {closed ? 'Open Controls' : 'Close Controls'}
    </div>
  )

  return (
    <div className={cn('dg', 'ac', className)} style={style} onClick={onClick}>
      <div className="dg main a" style={{ userSelect: 'none', width }}>
        {closeOnTop && closeButton}
        <ul className={cn({ closed })}>{renderChildren()}</ul>
        {!closeOnTop && closeButton}
      </div>
    </div>
  )
}

export { default as DatBoolean } from './DatBoolean'
export { default as DatButton } from './DatButton'
export { default as DatFolder } from './DatFolder'
export { default as DatNumber } from './DatNumber'
export { default as DatSelect } from './DatSelect'
export { default as DatString } from './DatString'
