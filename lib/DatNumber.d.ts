/// <reference types="react" />
import { DatGuiControl } from './index';
declare type DatNumberProps = DatGuiControl & {
    min?: number;
    max?: number;
    step?: number;
};
export default function DatNumber({ path, label, max, min, step, data, _onUpdateValue, className, ...rest }: DatNumberProps): JSX.Element;
export {};
