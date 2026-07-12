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
const LabelPairedUserCheckSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.875 7.25c0-1.23.656-2.379 1.75-3.008a3.48 3.48 0 0 1 3.5 0c1.066.63 1.75 1.778 1.75 3.008a3.54 3.54 0 0 1-1.75 3.035 3.48 3.48 0 0 1-3.5 0 3.48 3.48 0 0 1-1.75-3.035M.25 16.957c0-2.707 2.16-4.895 4.867-4.895h2.488a4.89 4.89 0 0 1 4.895 4.895c0 .438-.383.793-.82.793H1.043a.794.794 0 0 1-.793-.793M17.34 8.59l-3.5 3.5c-.274.273-.684.273-.93 0l-1.75-1.75a.6.6 0 0 1 0-.902c.246-.274.656-.274.93 0l1.285 1.285L16.41 7.66a.644.644 0 0 1 .902 0c.274.274.274.684 0 .93z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9b8901124ed53de21e43543fc0170ce5__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUserCheckSmFillIcon);
exports.default = ForwardRef;
