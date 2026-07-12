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
const LabelPairedCircleEightMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8.25-4h-.5a2.26 2.26 0 0 0-2.25 2.25c0 .5.156.969.406 1.313A2.5 2.5 0 0 0 5 13.5C5 14.906 6.094 16 7.5 16h1c1.375 0 2.5-1.094 2.5-2.5 0-.781-.375-1.469-.937-1.937.28-.344.437-.813.437-1.313C10.5 9.031 9.469 8 8.25 8m-.5 3a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75zm.5 1.5h.25c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7e1c7ea350399cf4ad9509a62a47ca74__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleEightMdFillIcon);
exports.default = ForwardRef;
