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
const LabelPairedArrowUpRightFromSquareLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.125 5.5h6.25c.313 0 .625.313.625.625v6.25a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V7.648l-9.57 9.57a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.898l9.57-9.57h-4.726a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625M2.5 6.75h5.625c.313 0 .625.313.625.625A.64.64 0 0 1 8.125 8H2.5c-.703 0-1.25.586-1.25 1.25V23c0 .703.547 1.25 1.25 1.25h13.75c.664 0 1.25-.547 1.25-1.25v-5.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625V23c0 1.406-1.133 2.5-2.5 2.5H2.5A2.47 2.47 0 0 1 0 23V9.25c0-1.367 1.094-2.5 2.5-2.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '79a343a621f9ca7136a6144daab1955f__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpRightFromSquareLgRegularIcon);
exports.default = ForwardRef;
