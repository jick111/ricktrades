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
const React = __importStar(require("react"));
const react_1 = require("react");
const LabelPairedArrowUpFromSquareLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm10.43 5.695 4.062 4.063a.66.66 0 0 1 0 .898.66.66 0 0 1-.898 0l-2.969-3.008V18a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V7.648l-3.008 3.008a.66.66 0 0 1-.898 0 .66.66 0 0 1 0-.898L9.53 5.695a.66.66 0 0 1 .899 0M2.5 6.75h1.25c.313 0 .625.313.625.625A.64.64 0 0 1 3.75 8H2.5c-.703 0-1.25.586-1.25 1.25V23c0 .703.547 1.25 1.25 1.25h15c.664 0 1.25-.547 1.25-1.25V9.25c0-.664-.586-1.25-1.25-1.25h-1.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h1.25c1.367 0 2.5 1.133 2.5 2.5V23c0 1.406-1.133 2.5-2.5 2.5h-15A2.47 2.47 0 0 1 0 23V9.25c0-1.367 1.094-2.5 2.5-2.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4e55233a5b35c51a3d5a322c8dc54b84__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpFromSquareLgRegularIcon);
exports.default = ForwardRef;
