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
const LabelPairedStopwatchSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.875 4.188a.45.45 0 0 1 .438-.438h4.375a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-1.75v1.777c1.34.11 2.57.684 3.472 1.559l1.012-1.012a.463.463 0 0 1 .629 0c.164.164.164.438 0 .63l-1.04 1.038a5.64 5.64 0 0 1 1.177 3.445c0 3.145-2.57 5.688-5.688 5.688a5.683 5.683 0 0 1-5.687-5.687 5.67 5.67 0 0 1 5.25-5.66V4.624h-1.75a.43.43 0 0 1-.438-.437m-2.187 7.875c0 1.722.902 3.308 2.406 4.183a4.87 4.87 0 0 0 4.812 0 4.88 4.88 0 0 0 2.406-4.183c0-1.696-.93-3.282-2.406-4.157a4.87 4.87 0 0 0-4.812 0 4.81 4.81 0 0 0-2.407 4.157m5.25-2.626V12.5a.45.45 0 0 1-.438.438.43.43 0 0 1-.437-.438V9.438A.45.45 0 0 1 6.5 9a.47.47 0 0 1 .438.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '55d24eb8018da00613cfc6ab5f2d047f__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedStopwatchSmRegularIcon);
exports.default = ForwardRef;
