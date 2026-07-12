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
const LabelPairedInfoMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 6, height: 24, viewBox: '0 0 6 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 6.25c0-.437.219-.844.625-1.062a1.27 1.27 0 0 1 1.25 0c.375.218.625.625.625 1.062 0 .469-.25.875-.625 1.094a1.27 1.27 0 0 1-1.25 0c-.406-.219-.625-.625-.625-1.094m-1.25 4a.74.74 0 0 1 .75-.75H3a.76.76 0 0 1 .75.75v8.25h1.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.5V11h-1a.72.72 0 0 1-.75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a4bf46ad5486aa99786d2ebe6d48425a__a' },
            React.createElement("path", { d: 'M0 0h6v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedInfoMdBoldIcon);
exports.default = ForwardRef;
