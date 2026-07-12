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
const LabelPairedStopwatchMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.5 4h3c.531 0 1 .469 1 1 0 .563-.469 1-1 1H8v1.094a6.5 6.5 0 0 1 3.094 1.375l.687-.656a.964.964 0 0 1 1.406 0 .964.964 0 0 1 0 1.406l-.75.75C13.095 11 13.5 12.219 13.5 13.5c0 3.594-2.937 6.5-6.5 6.5a6.495 6.495 0 0 1-6.5-6.5A6.465 6.465 0 0 1 6 7.094V6h-.5c-.562 0-1-.437-1-1 0-.531.438-1 1-1m2.25 6A.76.76 0 0 0 7 9.25a.74.74 0 0 0-.75.75v4c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '280d79f6e4b146d1a455d25c713c563f__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedStopwatchMdFillIcon);
exports.default = ForwardRef;
