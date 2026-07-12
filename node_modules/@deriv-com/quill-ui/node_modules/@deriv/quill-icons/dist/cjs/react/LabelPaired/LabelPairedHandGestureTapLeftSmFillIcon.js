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
const LabelPairedHandGestureTapLeftSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.8 8.973a.713.713 0 0 1 .93.328l1.094 2.297c.055-.192.192-.328.383-.438a.845.845 0 0 1 1.066.356.8.8 0 0 1 .41-.438.78.78 0 0 1 1.04.356.9.9 0 0 1 .437-.465c.383-.192.902 0 1.094.41l.684 1.476c.519 1.094.054 2.407-1.04 2.899l-1.832.875c-.574.273-1.23.355-1.832.191l-.109-.027a2.14 2.14 0 0 1-1.45-1.203l-.273-.574a1.1 1.1 0 0 1 0-.93l.164-.383c.028-.027.055-.082.082-.11l.383.848a.314.314 0 0 0 .383.137c.11-.055.191-.219.11-.355L5.472 9.875a.666.666 0 0 1 .328-.902m1.75 1.148c.138-.246.22-.547.22-.848 0-.957-.793-1.75-1.75-1.75s-1.75.793-1.75 1.75c0 .793.52 1.477 1.257 1.696l-.41-.848a1.13 1.13 0 0 1 .52-1.476c.547-.247 1.203 0 1.476.52zM3.396 4.625c.273 0 .52.246.52.547v11.183c0 .301-.247.52-.52.52-.301 0-.52-.219-.52-.52V5.172c0-.3.219-.547.52-.547' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9c3031b5283ad8aa4c407a64f464134c__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedHandGestureTapLeftSmFillIcon);
exports.default = ForwardRef;
