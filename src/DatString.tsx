import React, { ChangeEvent } from 'react'
import { DatGuiControl } from './index'
import { get } from 'lodash'
import cn from 'classnames'
import DatRow from './DatRow'

type DatStringProps = DatGuiControl & {}

export default function DatString({
  path,
  label,
  data,
  _onUpdateValue,
  className,
  ...rest
}: DatStringProps) {
  const value = get(data, path)

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement
    _onUpdateValue(path, value)
  }

  return (
    <DatRow
      label={label ?? path}
      className={cn(['string', className])}
      {...rest}
    >
      <input type="text" value={value} onChange={handleChange} />
    </DatRow>
  )
}
