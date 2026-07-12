"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IllustrativePaidProgrammeIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativePaidProgrammeIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.667 16.667c.366 0 .666-.3.666-.667v-4.667c0-1.1.9-2 2-2h14c.367 0 .667-.3.667-.666S19.7 8 19.333 8h-14A3.335 3.335 0 0 0 2 11.333V16c0 .367.3.667.667.667M28 12.667c-.367 0-.667.3-.667.666v9.334c0 1.1-.9 2-2 2h-20c-1.1 0-2-.9-2-2V20c0-.367-.3-.667-.666-.667S2 19.633 2 20v2.667A3.335 3.335 0 0 0 5.333 26h9.334v2H12c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h6.667c.366 0 .666-.3.666-.666s-.3-.667-.666-.667H16v-2h9.333a3.335 3.335 0 0 0 3.334-3.333v-9.334c0-.366-.3-.666-.667-.666' }),
        React.createElement("path", { d: 'M25.333 20c0-.367-.3-.667-.666-.667h-2c-.08 0-.16.02-.234.047q-.028.012-.066.033a.6.6 0 0 0-.14.094c-.02.013-.034.026-.054.046a.8.8 0 0 0-.12.174s-.006.013-.013.02a.7.7 0 0 0-.047.233v2.027c0 .366.3.666.667.666s.667-.3.667-.666v-.394l.86.86c.133.134.3.194.473.194s.34-.067.473-.194c.26-.26.26-.68 0-.94l-.86-.86h.394c.366 0 .666-.3.666-.666zM22.667 16c-.367 0-.667.3-.667.667v.666c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-.666c0-.367-.3-.667-.666-.667M19.527 16.86c-.26.26-.26.68 0 .94l.666.667c.134.133.3.193.474.193a.664.664 0 0 0 .473-1.133l-.667-.667a.664.664 0 0 0-.94 0zM19.333 20.667H20c.367 0 .667-.3.667-.667s-.3-.667-.667-.667h-.667c-.366 0-.666.3-.666.667s.3.667.666.667M18 12.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M20 12.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M22 12.667a.667.667 0 1 0 0-1.334.667.667 0 0 0 0 1.334M25.667 2.667a4.333 4.333 0 1 0 0 8.666 4.333 4.333 0 0 0 0-8.666m0 7.333c-1.654 0-3-1.347-3-3s1.346-3 3-3 3 1.347 3 3-1.347 3-3 3' }),
        React.createElement("path", { d: 'm26.193 6.193-.86.86-.193-.193a.664.664 0 1 0-.94.94l.667.667c.133.133.3.193.473.193s.34-.067.473-.193l1.334-1.334a.664.664 0 1 0-.94-.94zM10 18c0-.367-.3-.667-.667-.667H4.667c-.367 0-.667.3-.667.667s.3.667.667.667h4.666c.367 0 .667-.3.667-.667M10 14.667H6.667c-.367 0-.667.3-.667.666s.3.667.667.667H10c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666M6.667 21.333H10c.367 0 .667-.3.667-.666S10.367 20 10 20H6.667C6.3 20 6 20.3 6 20.667c0 .366.3.666.667.666M16.667 16c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666h-1.334V14c0-.367-.3-.667-.666-.667S14 13.633 14 14v.667h-.667c-.733 0-1.333.6-1.333 1.333v1.333c0 .734.6 1.334 1.333 1.334H16V20h-3.333c-.367 0-.667.3-.667.667 0 .366.3.666.667.666H14V22c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-.667H16c.733 0 1.333-.6 1.333-1.333v-1.333c0-.734-.6-1.334-1.333-1.334h-2.667V16z' }))));
exports.IllustrativePaidProgrammeIcon = IllustrativePaidProgrammeIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativePaidProgrammeIcon);
exports.default = ForwardRef;
