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
const LabelPairedFileExcelMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 24, viewBox: '0 0 12 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 18c0 .281.219.5.5.5h8c.25 0 .5-.219.5-.5V9H8c-.562 0-1-.437-1-1V5.5H2c-.281 0-.5.25-.5.5zM2 4h5.156c.532 0 1.032.219 1.407.594l2.843 2.843c.375.375.594.875.594 1.407V18c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m2.813 7.313L6 12.78l1.156-1.469a.72.72 0 0 1 1.032-.156c.343.281.406.75.124 1.063L6.938 14l1.406 1.813a.72.72 0 0 1-.156 1.03.715.715 0 0 1-1.032-.124L6 15.25l-1.156 1.469c-.282.343-.75.406-1.063.125a.715.715 0 0 1-.125-1.032L5.031 14l-1.375-1.781c-.281-.313-.219-.781.125-1.031.313-.282.781-.22 1.031.124' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8aa836505fdfb8c254399a72c3ecb74f__a' },
            React.createElement("path", { d: 'M0 0h12v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileExcelMdBoldIcon);
exports.default = ForwardRef;
