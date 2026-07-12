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
const LabelPairedGripDotsVerticalXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 36, viewBox: '0 0 12 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 12a1.48 1.48 0 0 1-1.5-1.5C1.5 9.703 2.156 9 3 9c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5m0 7.5A1.48 1.48 0 0 1 1.5 18c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5m1.5 6c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5M9 12a1.48 1.48 0 0 1-1.5-1.5C7.5 9.703 8.156 9 9 9c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5m1.5 6c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 7.5 18c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5M9 27a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f7be879202e6faa532d7d943d835c17f__a' },
            React.createElement("path", { d: 'M0 0h12v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGripDotsVerticalXlBoldIcon);
exports.default = ForwardRef;
