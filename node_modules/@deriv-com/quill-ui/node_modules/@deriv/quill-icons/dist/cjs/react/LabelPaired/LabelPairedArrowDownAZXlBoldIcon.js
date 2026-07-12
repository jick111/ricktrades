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
const LabelPairedArrowDownAZXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.203 23.672c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0l2.578 2.625V8.625c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v16.078l2.578-2.578a1.027 1.027 0 0 1 1.547 0 1.027 1.027 0 0 1 0 1.547l-4.5 4.5a1.027 1.027 0 0 1-1.547 0zM16.5 19.5h6c.422 0 .844.281.984.703.188.375.141.844-.187 1.172l-4.313 4.875H22.5c.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 22.5 28.5h-6c-.469 0-.89-.234-1.031-.656a1.005 1.005 0 0 1 .187-1.172l4.313-4.922H16.5c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125m3-12c.422 0 .797.281.984.656l3.75 7.5c.282.563.047 1.219-.515 1.5-.563.282-1.219.047-1.5-.515l-.657-1.266h-4.218l-.61 1.266c-.28.562-.937.797-1.5.515-.562-.281-.796-.937-.515-1.5l3.75-7.5A1.15 1.15 0 0 1 19.5 7.5m-1.031 5.625h2.015l-.984-1.969z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1ffe240afc0967596a9f926b06bc0d91__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownAZXlBoldIcon);
exports.default = ForwardRef;
