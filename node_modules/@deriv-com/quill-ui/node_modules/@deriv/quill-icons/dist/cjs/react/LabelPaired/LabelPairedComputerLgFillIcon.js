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
const LabelPairedComputerLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15 9.25H2.5V18H15zM2.5 6.75H15c1.367 0 2.5 1.133 2.5 2.5V18c0 1.406-1.133 2.5-2.5 2.5h-4.61l.43 1.25h2.93c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-10c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h2.89l.43-1.25H2.5A2.47 2.47 0 0 1 0 18V9.25c0-1.367 1.094-2.5 2.5-2.5m18.125 0h2.5c1.016 0 1.875.86 1.875 1.875v13.75c0 1.055-.86 1.875-1.875 1.875h-2.5a1.85 1.85 0 0 1-1.875-1.875V8.625c0-1.016.82-1.875 1.875-1.875m.625 2.5a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625zm-.625 3.125c0 .352.273.625.625.625h1.25a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625h-1.25a.64.64 0 0 0-.625.625m1.25 6.25c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a37382a5df13d0d1e0b9b6312a35ad32__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedComputerLgFillIcon);
exports.default = ForwardRef;
