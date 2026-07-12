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
const LabelPairedLinkSimpleXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 18c0-4.125 3.328-7.5 7.5-7.5h3.375c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H7.5c-2.906 0-5.25 2.39-5.25 5.25a5.24 5.24 0 0 0 5.25 5.25h3.375c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H7.5A7.46 7.46 0 0 1 0 18m27 0c0 4.172-3.375 7.5-7.5 7.5h-3.375c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125H19.5c2.86 0 5.25-2.344 5.25-5.25 0-2.86-2.39-5.25-5.25-5.25h-3.375c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125H19.5c4.125 0 7.5 3.375 7.5 7.5M8.625 16.875h9.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-9.75c-.656 0-1.125-.469-1.125-1.125 0-.61.469-1.125 1.125-1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a65767c2b0cc0af6dacafd11a534dbf2__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLinkSimpleXlBoldIcon);
exports.default = ForwardRef;
