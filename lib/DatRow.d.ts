import { ReactNode } from 'react';
import { DatGuiElementProps } from './index';
declare type DatRowProps = DatGuiElementProps & {
    label: string;
    children: ReactNode;
};
export default function DatRow({ label, className, style, onClick, children, }: DatRowProps): JSX.Element;
export {};
