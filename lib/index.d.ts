import './dat.gui.css';
import { CSSProperties, MouseEventHandler, ReactElement } from 'react';
export declare type DataType = {
    [key: string]: any;
};
export declare type StateType = {
    [key: string]: any;
};
export declare type DatGuiElementProps = {
    style?: CSSProperties;
    className?: any;
    onClick?: MouseEventHandler;
};
declare type DatGuiProps = DatGuiElementProps & {
    name?: string;
    hideable?: boolean;
    closed?: boolean;
    closeOnTop?: boolean;
    data: DataType;
    onUpdate: (data: DataType) => void | ((cb: (data: DataType) => DataType) => void);
    children?: ReactElement | ReactElement[];
};
export interface DatGuiControl extends DatGuiElementProps {
    path: string;
    label?: string;
    onUpdate?: (value: any) => void;
    [key: string]: any;
}
export default function DatGui({ hideable, closed: defaultClosed, closeOnTop, data, onUpdate, children, style, className, onClick, }: DatGuiProps): JSX.Element;
export { default as DatBoolean } from './DatBoolean';
export { default as DatButton } from './DatButton';
export { default as DatFolder } from './DatFolder';
export { default as DatNumber } from './DatNumber';
export { default as DatSelect } from './DatSelect';
export { default as DatString } from './DatString';
