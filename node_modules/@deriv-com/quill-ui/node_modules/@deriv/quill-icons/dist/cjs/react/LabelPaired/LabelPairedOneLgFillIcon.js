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
const LabelPairedOneLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 30, viewBox: '0 0 10 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.25 8v13.75h2.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-7.5C.547 24.25 0 23.703 0 23c0-.664.547-1.25 1.25-1.25h2.5V10.344l-1.836 1.21c-.547.391-1.328.235-1.719-.35-.39-.587-.234-1.329.352-1.72l3.75-2.5c.39-.273.86-.273 1.289-.078.39.235.664.664.664 1.094' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'dda209e367ca405959f2604d119fddbd__a' },
            React.createElement("path", { d: 'M0 0h10v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedOneLgFillIcon);
exports.default = ForwardRef;
