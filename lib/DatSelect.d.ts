/// <reference types="react" />
import { DatGuiControl } from './index';
declare type DatSelectProps = DatGuiControl & {
    options: string[] | number[] | {
        [key: string]: any;
    };
};
export default function DatSelect({ path, label, options, data, _onUpdateValue, className, ...rest }: DatSelectProps): JSX.Element;
export {};
