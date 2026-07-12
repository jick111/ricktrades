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
const LabelPairedFiveXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 8.438A1.16 1.16 0 0 1 2.625 7.5h9.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H3.563l-1.126 6.375h6.376c3.374 0 6.187 2.813 6.187 6.188 0 3.421-2.812 6.187-6.187 6.187h-4.5c-1.688 0-3.282-.937-4.032-2.484l-.187-.375c-.281-.563-.047-1.22.515-1.5.563-.282 1.22-.047 1.5.515l.188.375c.375.75 1.172 1.219 2.015 1.219h4.5a3.93 3.93 0 0 0 3.938-3.937c0-2.157-1.781-3.938-3.937-3.938H1.125A1.2 1.2 0 0 1 .235 18 1.35 1.35 0 0 1 0 17.063z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f435400473324d36f29b4e679ced0581__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFiveXlBoldIcon);
exports.default = ForwardRef;
