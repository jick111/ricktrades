import { default as React } from 'react';
import { TCountryCodes } from '../../../types.ts';

declare const DropdownContent: ({ options, code, showFlags, containerRef, headcompRef, onItemClick, }: {
    options: TCountryCodes[];
    code: string;
    showFlags?: boolean;
    containerRef: React.RefObject<HTMLDivElement>;
    headcompRef: React.RefObject<HTMLDivElement>;
    onItemClick: (item: TCountryCodes) => void;
}) => React.JSX.Element;
export default DropdownContent;
