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
const LabelPairedQuestionMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 9a.74.74 0 0 1-.75.75A.72.72 0 0 1 .5 9c0-2.187 1.781-4 3.969-3.969h1c2.218 0 4 1.782 4 4v.125a3.77 3.77 0 0 1-1.656 3.125l-1.625 1.094a.98.98 0 0 0-.438.813v.062A.74.74 0 0 1 5 15a.72.72 0 0 1-.75-.75v-.062c0-.813.406-1.594 1.094-2.063l1.625-1.094A2.2 2.2 0 0 0 8 9.156V9c0-1.375-1.125-2.5-2.5-2.5h-1A2.487 2.487 0 0 0 2 9m3 10c-.562 0-1-.437-1-1 0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3a8bbeee7cbe0234be8db2d4501a7a97__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedQuestionMdBoldIcon);
exports.default = ForwardRef;
