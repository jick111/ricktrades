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
const LabelPairedThreeCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 4.625c0-.187.164-.375.375-.375H7c.14 0 .281.094.328.258.07.14.024.305-.094.398L3.063 8.75H4.75c1.64 0 3 1.36 3 3 0 1.664-1.36 3-3 3H2.336c-.844 0-1.64-.469-2.016-1.242l-.047-.07a.385.385 0 0 1 .164-.516.385.385 0 0 1 .516.164L1 13.18c.258.515.773.82 1.336.82H4.75a2.25 2.25 0 0 0 0-4.5H2.125a.36.36 0 0 1-.352-.234.325.325 0 0 1 .094-.399L6.04 5H.625a.37.37 0 0 1-.375-.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '66395df85b57ed58a5a98063a18f93ab__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedThreeCaptionRegularIcon);
exports.default = ForwardRef;
