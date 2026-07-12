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
const LabelPairedPenLineMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm14.156 4.625 1.219 1.219a2.02 2.02 0 0 1 0 2.843l-1.5 1.5-4.062-4.062 1.5-1.5a2.02 2.02 0 0 1 2.843 0m-12.343 9.5 7.28-7.281 4.063 4.062-7.281 7.281a2.7 2.7 0 0 1-1.156.688L.937 19.969a.64.64 0 0 1-.718-.188.64.64 0 0 1-.188-.718l1.094-3.782c.125-.437.375-.844.688-1.156M7.75 18.5h9.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-9.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd95bae8413d33969a08ab241228511c1__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPenLineMdFillIcon);
exports.default = ForwardRef;
