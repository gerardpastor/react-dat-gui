import { ReactElement } from 'react';
import { DatGuiElementProps } from './index';
declare type DatFolderProps = DatGuiElementProps & {
    title?: string;
    children?: ReactElement | ReactElement[];
    [key: string]: any;
};
export default function DatFolder({ title, children, state, _onUpdateState, className, style, onClick, ...rest }: DatFolderProps): JSX.Element;
export {};
