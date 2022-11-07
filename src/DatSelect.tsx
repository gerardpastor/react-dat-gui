import React, { ChangeEvent } from 'react'
import { DatGuiControl } from './index'
import { get } from 'lodash'
import cn from 'classnames'
import DatRow from './DatRow'

type DatSelectProps = DatGuiControl & {
  options: string[] | number[] | { [key: string]: any }
}

export default function DatSelect({
  path,
  label,
  options,
  data,
  _onUpdateValue,
  className,
  ...rest
}: DatSelectProps) {
  const value = get(data, path)
  const choices = Array.isArray(options)
    ? options.map((value) => [value, value])
    : Object.entries(options)

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement
    const originalValue = choices.find(([, raw]) => `${raw}` === value)?.[1]
    _onUpdateValue(path, originalValue)
  }

  return (
    <DatRow
      label={label ?? path}
      className={cn(['select', className])}
      {...rest}
    >
      <select value={value} onChange={handleChange}>
        {choices.map(([key, value]) => (
          <option key={[key, value].join(',')} value={value}>
            {key}
          </option>
        ))}
      </select>
    </DatRow>
  )
}
