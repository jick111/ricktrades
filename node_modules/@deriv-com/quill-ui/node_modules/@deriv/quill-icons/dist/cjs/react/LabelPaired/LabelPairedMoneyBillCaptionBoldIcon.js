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
const LabelPairedMoneyBillCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.875 6.125c0 .844-.68 1.5-1.5 1.5v3.75c.82 0 1.5.68 1.5 1.5h8.25c0-.82.656-1.5 1.5-1.5v-3.75a1.48 1.48 0 0 1-1.5-1.5zM.25 6.5c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5zM7 7.25c.797 0 1.523.445 1.945 1.125.399.703.399 1.57 0 2.25-.422.703-1.148 1.125-1.945 1.125-.82 0-1.547-.422-1.969-1.125a2.27 2.27 0 0 1 0-2.25C5.453 7.695 6.18 7.25 7 7.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '48eda49e1b584a530a0f5f37550f9f5e__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMoneyBillCaptionBoldIcon);
exports.default = ForwardRef;
