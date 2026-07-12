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
const LabelPairedCircleCalendarCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.875 9.5c0-1.734-.937-3.328-2.437-4.219a4.89 4.89 0 0 0-4.876 0A4.87 4.87 0 0 0 1.126 9.5a4.88 4.88 0 0 0 2.438 4.242c1.5.867 3.351.867 4.874 0 1.5-.89 2.438-2.484 2.438-4.242M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m4.875-3.375c.188 0 .375.188.375.375v.375h1.5V6.5c0-.187.164-.375.375-.375.188 0 .375.188.375.375v.375h.375C8.485 6.875 9 7.391 9 8v3c0 .633-.516 1.125-1.125 1.125h-3.75A1.11 1.11 0 0 1 3 11V8c0-.61.492-1.125 1.125-1.125H4.5V6.5c0-.187.164-.375.375-.375M4.125 11h3.75V8.75h-3.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '86cd13eebefd44dfd580d5b56c187a6b__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleCalendarCaptionBoldIcon);
exports.default = ForwardRef;
