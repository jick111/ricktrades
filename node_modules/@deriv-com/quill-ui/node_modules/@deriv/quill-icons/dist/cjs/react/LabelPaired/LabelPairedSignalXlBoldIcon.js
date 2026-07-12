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
const LabelPairedSignalXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M27 6c.61 0 1.125.516 1.125 1.125v21.75A1.11 1.11 0 0 1 27 30c-.656 0-1.125-.469-1.125-1.125V7.125C25.875 6.515 26.344 6 27 6m-6 4.5c.61 0 1.125.516 1.125 1.125v17.25A1.11 1.11 0 0 1 21 30c-.656 0-1.125-.469-1.125-1.125v-17.25c0-.61.469-1.125 1.125-1.125M15 15c.61 0 1.125.516 1.125 1.125v12.75A1.11 1.11 0 0 1 15 30c-.656 0-1.125-.469-1.125-1.125v-12.75c0-.61.469-1.125 1.125-1.125m-6 4.5c.61 0 1.125.516 1.125 1.125v8.25A1.11 1.11 0 0 1 9 30c-.656 0-1.125-.469-1.125-1.125v-8.25c0-.61.469-1.125 1.125-1.125M3 24c.61 0 1.125.516 1.125 1.125v3.75A1.11 1.11 0 0 1 3 30c-.656 0-1.125-.469-1.125-1.125v-3.75C1.875 24.515 2.344 24 3 24' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f0d597ac001ef5006060eca74796bd6d__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSignalXlBoldIcon);
exports.default = ForwardRef;
