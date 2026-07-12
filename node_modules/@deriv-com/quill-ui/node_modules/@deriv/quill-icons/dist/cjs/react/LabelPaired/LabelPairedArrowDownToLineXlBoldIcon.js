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
const LabelPairedArrowDownToLineXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 36, viewBox: '0 0 18 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M16.875 28.5H1.125C.469 28.5 0 28.031 0 27.375c0-.61.469-1.125 1.125-1.125h15.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125m-8.719-6.328-6-6.375a1.16 1.16 0 0 1 .047-1.594c.469-.422 1.172-.422 1.594.047l4.078 4.313V8.625c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v9.938l4.031-4.313c.422-.469 1.125-.469 1.594-.047s.469 1.125.047 1.594l-6 6.375A1.1 1.1 0 0 1 9 22.5c-.328 0-.61-.094-.844-.328' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '044027d9ca386f2337d80d60b87a389d__a' },
            React.createElement("path", { d: 'M0 0h18v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownToLineXlBoldIcon);
exports.default = ForwardRef;
