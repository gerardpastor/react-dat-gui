import React, { ChangeEvent } from 'react'
import { DatGuiControl } from './index'
import { get } from 'lodash'
import cn from 'classnames'
import DatRow from './DatRow'

type DatBooleanProps = DatGuiControl & {}

export default function DatBoolean({
  path,
  label,
  data,
  _onUpdateValue,
  className,
  ...rest
}: DatBooleanProps) {
  const value = get(data, path)

  const handleChange = (e: ChangeEvent) => {
    const { checked } = e.target as HTMLInputElement
    _onUpdateValue(path, checked)
  }

  return (
    <DatRow
      label={label ?? path}
      className={cn(['boolean', className])}
      {...rest}
    >
      <input type="checkbox" checked={value} onChange={handleChange} />
    </DatRow>
  )
}
