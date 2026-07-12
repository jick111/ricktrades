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
const LabelPairedMagnifyingGlassMinusSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.688 5.063A4.41 4.41 0 0 0 1.886 7.25a4.32 4.32 0 0 0 0 4.375 4.35 4.35 0 0 0 3.8 2.188c1.56 0 2.981-.82 3.774-2.188a4.32 4.32 0 0 0 0-4.375c-.793-1.34-2.215-2.187-3.774-2.187m0 10.062A5.683 5.683 0 0 1 0 9.438C0 6.32 2.543 3.75 5.688 3.75c3.117 0 5.687 2.57 5.687 5.688 0 1.34-.465 2.57-1.23 3.554l3.636 3.664a.6.6 0 0 1 0 .903.6.6 0 0 1-.902 0l-3.664-3.637a5.73 5.73 0 0 1-3.527 1.203m-1.97-6.344h3.938c.356 0 .657.301.657.656 0 .383-.301.657-.657.657H3.72a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a34b0c9872c14e086ad5674cc8c05c78__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMagnifyingGlassMinusSmBoldIcon);
exports.default = ForwardRef;
