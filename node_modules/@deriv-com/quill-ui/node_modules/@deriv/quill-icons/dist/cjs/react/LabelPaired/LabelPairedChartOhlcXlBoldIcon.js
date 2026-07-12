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
const LabelPairedChartOhlcXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15 6c.61 0 1.125.516 1.125 1.125V9H18c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 18 11.25h-1.875v14.625A1.11 1.11 0 0 1 15 27c-.656 0-1.125-.469-1.125-1.125V24H12c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h1.875V7.125C13.875 6.515 14.344 6 15 6m9.75 3c.61 0 1.125.516 1.125 1.125v8.625h1.875c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 27.75 21h-1.875v1.875A1.11 1.11 0 0 1 24.75 24c-.656 0-1.125-.469-1.125-1.125V14.25H21.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h1.875v-1.875c0-.61.469-1.125 1.125-1.125m-19.5 6c.61 0 1.125.516 1.125 1.125v8.625H8.25c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 8.25 27H6.375v1.875A1.11 1.11 0 0 1 5.25 30c-.656 0-1.125-.469-1.125-1.125V20.25H2.25c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125h1.875v-1.875c0-.61.469-1.125 1.125-1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b07f3a5c011ac0cacd3d1d98d86c60d8__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartOhlcXlBoldIcon);
exports.default = ForwardRef;
