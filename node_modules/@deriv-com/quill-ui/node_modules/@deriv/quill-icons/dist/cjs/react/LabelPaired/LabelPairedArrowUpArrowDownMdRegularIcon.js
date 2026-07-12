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
const LabelPairedArrowUpArrowDownMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm5.344 5.156 3 3a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L5.5 6.719V18.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V6.719L2.344 8.875a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l3-3a.53.53 0 0 1 .719 0m11 10.719-3 3a.53.53 0 0 1-.719 0l-3-3a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0l2.156 2.156V5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v11.813l2.125-2.157a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5fba844c5d4f2d812c1e58873b4d242f__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpArrowDownMdRegularIcon);
exports.default = ForwardRef;
