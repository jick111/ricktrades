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
const LabelPairedEyeSlashSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm1.29 3.914 3.062 2.379C5.582 5.363 7.113 4.625 9 4.625c2.188 0 3.965 1.012 5.25 2.215 1.285 1.176 2.133 2.598 2.543 3.582a.98.98 0 0 1 0 .683c-.355.875-1.094 2.133-2.187 3.227l2.87 2.27c.301.218.356.628.11.902a.604.604 0 0 1-.902.11L.496 4.925a.604.604 0 0 1-.11-.903.604.604 0 0 1 .903-.109m5.058 3.938 2.46 1.941c.11-.246.192-.492.192-.766 0-.218-.055-.382-.11-.574-.027-.137.055-.328.22-.3 1.12.027 2.105.792 2.406 1.94.164.602.109 1.204-.11 1.723l1.04.82c.3-.546.492-1.202.492-1.886 0-2.16-1.778-3.937-3.938-3.937-1.04 0-1.969.41-2.652 1.039m4.101 6.562L12.445 16A7.16 7.16 0 0 1 9 16.875c-2.215 0-3.992-.984-5.277-2.187-1.285-1.204-2.133-2.626-2.543-3.583a.98.98 0 0 1 0-.683C1.453 9.793 1.89 9 2.52 8.18l2.57 2.023c-.027.192-.027.383-.027.547A3.92 3.92 0 0 0 9 14.688a3.8 3.8 0 0 0 1.45-.274' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b12039740ecff21ea864699c3fde5fac__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEyeSlashSmFillIcon);
exports.default = ForwardRef;
