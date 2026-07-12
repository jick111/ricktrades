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
const LabelPairedQuestionCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.625 5a2.25 2.25 0 0 0-2.25 2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375c0-1.64 1.336-3 3-3h.75c1.64 0 3 1.36 3 3A2.63 2.63 0 0 1 6.32 9.36l-1.43 1.078a1.28 1.28 0 0 0-.515 1.03v.282c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-.281c0-.633.305-1.242.82-1.64l1.43-1.079c.469-.352.75-.89.75-1.5A2.25 2.25 0 0 0 4.375 5zm-.187 9c0-.305.234-.562.562-.562a.57.57 0 0 1 .563.562.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ca0431573c75d9647c84f20ed2bf19e1__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedQuestionCaptionRegularIcon);
exports.default = ForwardRef;
