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
const LabelPairedArrowRotateRightMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14.5 10h-4a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h2.688A6 6 0 0 0 8 6c-3.312 0-6 2.688-6 6 0 3.313 2.688 6 6 6a6.04 6.04 0 0 0 5.031-2.719A.58.58 0 0 1 13.5 15c.375 0 .625.406.406.75C12.687 17.719 10.47 19 8 19c-3.875 0-7-3.125-7-7 0-3.844 3.125-7 7-7 2.531 0 4.75 1.375 6 3.406V5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v4c0 .281-.25.5-.5.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c6839be7ab5512d8c0939bb219945054__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRotateRightMdRegularIcon);
exports.default = ForwardRef;
