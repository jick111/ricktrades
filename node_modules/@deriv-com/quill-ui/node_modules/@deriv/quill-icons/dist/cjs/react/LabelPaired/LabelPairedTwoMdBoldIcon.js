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
const LabelPairedTwoMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.594 6.5c-.844 0-1.625.344-2.219.938L1.281 8.53c-.312.313-.781.313-1.062 0a.684.684 0 0 1 0-1.031l1.094-1.125A4.67 4.67 0 0 1 4.592 5h.22C7.25 5 9.25 7 9.25 9.438c0 1.218-.531 2.374-1.406 3.218L2.625 17.5H9.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75a.79.79 0 0 1-.719-.469.79.79 0 0 1 .188-.812l6.594-6.157c.593-.562.937-1.343.937-2.124A2.934 2.934 0 0 0 4.813 6.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1bdb4a8a8cc6f61b72f067ed49b756df__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTwoMdBoldIcon);
exports.default = ForwardRef;
