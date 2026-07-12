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
const LabelPairedHandGestureSwipeLeftRightSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9 6.566c.383 0 .684.301.684.684v2.543a.76.76 0 0 1 .547-.219c.437 0 .792.328.82.766a.76.76 0 0 1 .547-.219c.437 0 .793.328.82.766a.76.76 0 0 1 .547-.219c.437 0 .82.383.82.82v1.64a2.194 2.194 0 0 1-2.187 2.188H9.574a2.75 2.75 0 0 1-1.75-.629l-.082-.082c-.52-.41-.793-1.039-.793-1.695v-.629c0-.328.137-.629.41-.847l.329-.274c.027-.027.054-.055.109-.055v.93c0 .164.11.274.273.274.137 0 .274-.11.274-.274V7.25a.66.66 0 0 1 .683-.684zm4.54 2.707 1.476-1.476c.164-.164.164-.41 0-.547l-1.559-1.586a.45.45 0 0 0-.574 0 .45.45 0 0 0 0 .574l.902.875h-2.652c-.219 0-.383.192-.383.41 0 .22.164.383.383.383h2.652l-.793.793a.396.396 0 0 0 0 .574c.164.137.41.137.547 0m-9.106 0-1.45-1.476c-.164-.164-.164-.41 0-.547l1.559-1.586c.164-.137.41-.137.547 0a.396.396 0 0 1 0 .574l-.875.875h2.652c.219 0 .383.192.383.41a.374.374 0 0 1-.383.383H4.215l.793.793a.45.45 0 0 1 0 .574.45.45 0 0 1-.574 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '229d2c8a032f5c0e5f8bb34587e269c5__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedHandGestureSwipeLeftRightSmFillIcon);
exports.default = ForwardRef;
