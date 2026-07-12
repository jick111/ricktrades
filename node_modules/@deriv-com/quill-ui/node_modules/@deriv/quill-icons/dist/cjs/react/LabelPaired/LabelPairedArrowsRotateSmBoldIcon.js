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
const LabelPairedArrowsRotateSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.57 8.89c-.164.329-.547.465-.875.329a.654.654 0 0 1-.355-.848A6.17 6.17 0 0 1 7 4.625c1.422 0 2.79.574 3.8 1.586l1.45 1.45V6.155c0-.355.273-.656.656-.656.356 0 .656.3.656.656V9.22c0 .383-.3.656-.656.656H9.844a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656h1.476L9.871 7.14A4.08 4.08 0 0 0 7 5.938 4.8 4.8 0 0 0 2.57 8.89m10.063 4.294c-.957 2.16-3.117 3.691-5.633 3.691-1.45 0-2.816-.547-3.828-1.586L1.75 13.867v1.477c0 .383-.3.656-.656.656a.63.63 0 0 1-.657-.656V12.28c0-.355.274-.656.657-.656h3.062c.356 0 .657.3.657.656 0 .383-.301.656-.657.656H2.652l1.45 1.45c.765.765 1.804 1.175 2.898 1.175 1.969 0 3.691-1.175 4.402-2.898a.67.67 0 0 1 .875-.355c.329.136.493.52.356.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fea244ece5ea34f18f7e7e378a2569f3__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowsRotateSmBoldIcon);
exports.default = ForwardRef;
