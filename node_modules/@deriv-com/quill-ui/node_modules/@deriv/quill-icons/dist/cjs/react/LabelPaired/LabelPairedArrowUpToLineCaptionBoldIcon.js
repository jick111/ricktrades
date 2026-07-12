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
const LabelPairedArrowUpToLineCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.563 4.25h7.875A.57.57 0 0 1 9 4.813a.555.555 0 0 1-.562.562H.561A.54.54 0 0 1 0 4.813c0-.305.234-.563.563-.563m4.335 3.188 3 3.187c.211.234.211.586-.023.797-.234.21-.586.21-.797-.024L5.062 9.242v4.945a.555.555 0 0 1-.562.563.54.54 0 0 1-.562-.562V9.242l-2.04 2.156c-.21.235-.562.235-.796.024-.235-.211-.235-.563-.024-.797l3-3.187A.59.59 0 0 1 4.5 7.25c.14 0 .305.07.398.188' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f21b4a171845a3aa837d567096bbcc1f__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpToLineCaptionBoldIcon);
exports.default = ForwardRef;
