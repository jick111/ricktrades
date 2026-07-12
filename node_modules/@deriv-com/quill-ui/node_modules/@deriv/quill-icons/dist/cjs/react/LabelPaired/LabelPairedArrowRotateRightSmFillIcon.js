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
const LabelPairedArrowRotateRightSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm10.555 8.125-.465-.465a4.423 4.423 0 0 0-6.207 0 4.423 4.423 0 0 0 0 6.207 4.423 4.423 0 0 0 6.207 0c.328-.355.875-.355 1.23 0 .328.328.328.875 0 1.23a6.156 6.156 0 0 1-8.668 0 6.156 6.156 0 0 1 0-8.667 6.156 6.156 0 0 1 8.668 0l.492.492V5.5c0-.465.383-.875.876-.875a.9.9 0 0 1 .874.875V9c0 .492-.41.875-.874.875h-3.5A.864.864 0 0 1 8.312 9c0-.465.383-.875.876-.875z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '99751321b94e5bc5ded6447984c85ff3__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRotateRightSmFillIcon);
exports.default = ForwardRef;
