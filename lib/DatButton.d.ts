/// <reference types="react" />
import { DatGuiElementProps } from './index';
declare type DatButtonProps = DatGuiElementProps & {
    label: string;
};
export default function DatButton({ label, className, ...rest }: DatButtonProps): JSX.Element;
export {};
