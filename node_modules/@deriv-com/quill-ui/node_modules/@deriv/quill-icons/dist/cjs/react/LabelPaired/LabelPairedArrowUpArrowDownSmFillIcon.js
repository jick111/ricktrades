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
const LabelPairedArrowUpArrowDownSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm5.102 4.898 2.625 2.625a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-1.122-1.12V16c0 .492-.41.875-.875.875A.864.864 0 0 1 3.625 16V7.633l-1.148 1.12a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23L3.87 4.898a.843.843 0 0 1 1.23 0m9.625 9.106-2.625 2.625a.843.843 0 0 1-1.23 0l-2.626-2.625a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l1.149 1.12V5.5c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v8.395l1.121-1.122a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cbe38caa723b4c4ed5e96b4b8c037535__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpArrowDownSmFillIcon);
exports.default = ForwardRef;
