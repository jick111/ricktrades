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
const LabelPairedCalendarRangeMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 5c0-.531.438-1 1-1 .531 0 1 .469 1 1v1h4V5c0-.531.438-1 1-1 .531 0 1 .469 1 1v1h1.5c.813 0 1.5.688 1.5 1.5V9H0V7.5A1.5 1.5 0 0 1 1.5 6H3zm11 5v8.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.48 1.48 0 0 1 0 18.5V10zM4 13c0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1 .531 0 1-.437 1-1m7 5c.531 0 1-.437 1-1 0-.531-.469-1-1-1-.562 0-1 .469-1 1 0 .563.438 1 1 1m-5-5c0 .438.313.75.75.75h4.5A.74.74 0 0 0 12 13a.76.76 0 0 0-.75-.75h-4.5A.74.74 0 0 0 6 13m1.25 3.25h-4.5A.74.74 0 0 0 2 17c0 .438.313.75.75.75h4.5A.74.74 0 0 0 8 17a.76.76 0 0 0-.75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b94fc32893b02c0009629314d4a734bb__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCalendarRangeMdFillIcon);
exports.default = ForwardRef;
