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
const LabelPairedCashRegisterXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 6h10.5c.797 0 1.5.703 1.5 1.5v3c0 .844-.703 1.5-1.5 1.5H9.75v1.5h10.125c1.5 0 2.766 1.125 2.953 2.578l1.125 7.735c0 .14.047.28.047.421V27c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-3.188l1.125-7.734c.188-1.453 1.453-2.578 2.953-2.578H6.75V12H3a1.48 1.48 0 0 1-1.5-1.5v-3C1.5 6.703 2.156 6 3 6m1.5 2.25c-.422 0-.75.375-.75.75 0 .422.328.75.75.75H12c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75zM2.25 27c0 .422.328.75.75.75h18c.375 0 .75-.328.75-.75v-.75H2.25zm18.375-10.594a.76.76 0 0 0-.75-.656H4.078a.76.76 0 0 0-.75.656L2.25 24h19.453zm-15.375.469c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125M8.625 18c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125M7.5 20.625c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 7.5 22.875c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125M13.125 18c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125M12 20.625c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 12 22.875c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125M17.625 18c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125M16.5 20.625c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '76c2a3f57453fea7adbfe2f097073235__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCashRegisterXlBoldIcon);
exports.default = ForwardRef;
