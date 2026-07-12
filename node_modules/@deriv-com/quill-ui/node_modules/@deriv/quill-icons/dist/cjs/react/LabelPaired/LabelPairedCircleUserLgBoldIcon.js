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
const LabelPairedCircleUserLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15.86 21.125a8.04 8.04 0 0 0 2.265-5.625c0-4.453-3.672-8.125-8.125-8.125-4.492 0-8.125 3.672-8.125 8.125 0 2.188.82 4.18 2.227 5.625A5 5 0 0 1 8.75 18h2.5c2.07 0 3.867 1.29 4.61 3.125m-1.563 1.29c-.274-1.446-1.563-2.54-3.047-2.54h-2.5a3.145 3.145 0 0 0-3.086 2.54c1.25.78 2.734 1.21 4.336 1.21 1.563 0 3.047-.43 4.297-1.21M10 25.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m0-10.625c.547 0 1.055-.273 1.328-.781.274-.469.274-1.055 0-1.563A1.56 1.56 0 0 0 10 11.75c-.586 0-1.094.313-1.367.781-.274.508-.274 1.094 0 1.563.273.508.781.781 1.367.781m-3.437-1.562c0-1.211.625-2.344 1.718-2.97 1.055-.585 2.344-.585 3.438 0 1.054.626 1.719 1.759 1.719 2.97 0 1.25-.665 2.382-1.72 3.007-1.093.586-2.382.586-3.437 0-1.094-.625-1.719-1.758-1.719-3.008' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4795e06a9aebb98067d4f7e7bac1de2c__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleUserLgBoldIcon);
exports.default = ForwardRef;
