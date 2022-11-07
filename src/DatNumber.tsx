import React, { ChangeEvent } from 'react'
import { get } from 'lodash'
import { DatGuiControl } from './index'
import cn from 'classnames'
import DatRow from './DatRow'

type DatNumberProps = DatGuiControl & {
  min?: number
  max?: number
  step?: number
}

export default function DatNumber({
  path,
  label,
  max,
  min = 0,
  step = 1,
  data,
  _onUpdateValue,
  className,
  ...rest
}: DatNumberProps) {
  const value = get(data, path)
  const hasRange = typeof max !== 'undefined'
  const percentage = hasRange ? ((value - min) / (max - min)) * 100 : 0

  const handleChange = (e: ChangeEvent) => {
    const { value, valueAsNumber } = e.target as HTMLInputElement
    if (value === '') return _onUpdateValue(path, 0)
    !isNaN(valueAsNumber) && _onUpdateValue(path, Number(valueAsNumber))
  }

  return (
    <DatRow
      label={label ?? path}
      className={cn(['number', { 'has-slider': hasRange }, className])}
      {...rest}
    >
      {hasRange ? (
        <>
          <div>
            <input
              type="number"
              min={min}
              max={max}
              step={step}
              value={value ?? ''}
              onChange={handleChange}
            />
          </div>
          <div className="slider">
            <div
              className="slider-fg"
              style={{ width: `${percentage}%` }}
            ></div>
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={value ?? ''}
              onChange={handleChange}
            />
          </div>
        </>
      ) : (
        <input
          type="number"
          value={value ?? ''}
          onChange={handleChange}
          step={step}
        />
      )}
    </DatRow>
  )
}
