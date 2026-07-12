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
const LabelPairedMemoPadLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 10.5V23c0 .703.547 1.25 1.25 1.25h12.5c.664 0 1.25-.547 1.25-1.25V10.5zm0-1.25h15V8c0-.664-.586-1.25-1.25-1.25H2.75c-.703 0-1.25.586-1.25 1.25zM17.75 8v15c0 1.406-1.133 2.5-2.5 2.5H2.75A2.47 2.47 0 0 1 .25 23V8c0-1.367 1.094-2.5 2.5-2.5h12.5c1.367 0 2.5 1.133 2.5 2.5M4.625 13h8.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-8.75A.617.617 0 0 1 4 13.625c0-.312.273-.625.625-.625m0 3.75h8.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-8.75A.617.617 0 0 1 4 17.375c0-.312.273-.625.625-.625m0 3.75h5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5A.617.617 0 0 1 4 21.125c0-.312.273-.625.625-.625' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'de89674a0dd5e6a003892e9eae13b7cb__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMemoPadLgRegularIcon);
exports.default = ForwardRef;
