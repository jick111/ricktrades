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
exports.StandaloneArrowUpFromSquareRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpFromSquareRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm16.43 6.695 4.062 4.063a.66.66 0 0 1 0 .898.66.66 0 0 1-.898 0l-2.969-3.008V19a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V8.648l-3.008 3.008a.66.66 0 0 1-.898 0 .66.66 0 0 1 0-.898l4.062-4.063a.66.66 0 0 1 .899 0M8.5 7.75h1.25c.313 0 .625.313.625.625A.64.64 0 0 1 9.75 9H8.5c-.703 0-1.25.586-1.25 1.25V24c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25V10.25c0-.664-.586-1.25-1.25-1.25h-1.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h1.25c1.367 0 2.5 1.133 2.5 2.5V24c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 6 24V10.25c0-1.367 1.094-2.5 2.5-2.5' })));
exports.StandaloneArrowUpFromSquareRegularIcon = StandaloneArrowUpFromSquareRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpFromSquareRegularIcon);
exports.default = ForwardRef;
