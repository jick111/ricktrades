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
exports.StandalonePageCircleArrowRightBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePageCircleArrowRightBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M4.75 9c0-1.367 1.094-2.5 2.5-2.5h7.07c.664 0 1.29.273 1.758.742l2.93 2.93c.469.469.742 1.094.742 1.758v2.343c-.703.196-1.328.47-1.875.86V11.93a.63.63 0 0 0-.195-.43l-2.93-2.93a.63.63 0 0 0-.43-.195H7.25A.64.64 0 0 0 6.625 9v15c0 .352.273.625.625.625h8.594a6.7 6.7 0 0 0 1.758 1.875H7.25a2.47 2.47 0 0 1-2.5-2.5zM16 20.875c0-3.086 2.5-5.625 5.625-5.625 3.086 0 5.625 2.54 5.625 5.625a5.626 5.626 0 0 1-5.625 5.625A5.6 5.6 0 0 1 16 20.875m2.5 0c0 .352.273.625.625.625h3.477l-1.133 1.133a.66.66 0 0 0 0 .898.66.66 0 0 0 .898 0l2.188-2.187a.66.66 0 0 0 0-.899l-2.188-2.187a.66.66 0 0 0-.898 0 .66.66 0 0 0 0 .898l1.133 1.094h-3.477a.64.64 0 0 0-.625.625' })));
exports.StandalonePageCircleArrowRightBoldIcon = StandalonePageCircleArrowRightBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePageCircleArrowRightBoldIcon);
exports.default = ForwardRef;
