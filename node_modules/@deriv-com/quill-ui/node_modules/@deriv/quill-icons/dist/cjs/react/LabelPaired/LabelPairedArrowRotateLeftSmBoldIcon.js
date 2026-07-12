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
const LabelPairedArrowRotateLeftSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.094 9.875a.63.63 0 0 1-.657-.656V5.28c0-.355.274-.656.657-.656.355 0 .656.3.656.656v2.215l.547-.656C3.418 5.5 5.086 4.625 7 4.625c3.363 0 6.125 2.762 6.125 6.125 0 3.39-2.762 6.125-6.125 6.125a6.15 6.15 0 0 1-3.691-1.203.684.684 0 0 1-.137-.93.66.66 0 0 1 .93-.137A4.8 4.8 0 0 0 7 15.563a4.8 4.8 0 0 0 4.813-4.812A4.82 4.82 0 0 0 7 5.938c-1.504 0-2.816.683-3.719 1.75l-.738.875h2.488c.356 0 .657.3.657.656 0 .383-.301.656-.657.656z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e495712065ebe86beacb1f636485bfae__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRotateLeftSmBoldIcon);
exports.default = ForwardRef;
