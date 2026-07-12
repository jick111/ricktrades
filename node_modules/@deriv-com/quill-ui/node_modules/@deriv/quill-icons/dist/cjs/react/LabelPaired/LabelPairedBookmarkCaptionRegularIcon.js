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
const LabelPairedBookmarkCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 4.625C0 4.015.492 3.5 1.125 3.5h6.75C8.485 3.5 9 4.016 9 4.625v10.36c0 .304-.234.515-.54.515a.6.6 0 0 1-.28-.07L4.5 12.969l-3.703 2.46a.6.6 0 0 1-.281.071.49.49 0 0 1-.516-.516zm1.125-.375a.385.385 0 0 0-.375.375v9.938l3.54-2.368a.4.4 0 0 1 .397 0l3.563 2.367V4.626a.4.4 0 0 0-.375-.375z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c3c067128bab2c1717bd297eaec3042f__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBookmarkCaptionRegularIcon);
exports.default = ForwardRef;
