import { DatGuiElementProps } from './index'
import DatRow from './DatRow'
import cn from 'classnames'

type DatButtonProps = DatGuiElementProps & {
  label: string
}

export default function DatButton({
  label,
  className,
  ...rest
}: DatButtonProps) {
  return (
    <DatRow label={label} className={cn(['function', className])} {...rest}>
      <div className="button"></div>
    </DatRow>
  )
}
