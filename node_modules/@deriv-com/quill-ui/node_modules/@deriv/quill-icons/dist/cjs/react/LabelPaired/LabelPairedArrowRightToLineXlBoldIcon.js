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
const LabelPairedArrowRightToLineXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M21 10.125v15.75A1.11 1.11 0 0 1 19.875 27c-.656 0-1.125-.469-1.125-1.125v-15.75c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125m-6.375 8.719-6.375 6a1.16 1.16 0 0 1-1.594-.047c-.422-.469-.422-1.172.047-1.594l4.313-4.078H1.125C.469 19.125 0 18.656 0 18c0-.61.469-1.125 1.125-1.125h9.89l-4.312-4.031c-.469-.422-.469-1.125-.047-1.594s1.125-.469 1.594-.047l6.375 6c.234.235.375.516.375.797 0 .328-.14.61-.375.844' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b9bd975e843251e0da9d113aefb45206__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRightToLineXlBoldIcon);
exports.default = ForwardRef;
