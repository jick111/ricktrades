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
const LabelPairedSortUpSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm4.336 5.582-3.281 3.09C1 8.727 1 8.754 1 8.809c0 .109.082.191.191.191h6.59C7.891 9 8 8.918 8 8.809a.15.15 0 0 0-.082-.137l-3.281-3.09A.15.15 0 0 0 4.5 5.5q-.123 0-.164.082m-.602-.656c.192-.192.465-.301.766-.301.273 0 .547.11.738.3L8.52 8.044c.218.191.355.492.355.766 0 .601-.492 1.066-1.094 1.066h-6.59A1.05 1.05 0 0 1 .125 8.809c0-.274.11-.575.328-.766z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'aa62ec19d12717f3cc34aa4684f7d4c3__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSortUpSmRegularIcon);
exports.default = ForwardRef;
