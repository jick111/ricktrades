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
const LabelPairedBookCircleQuestionCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 5c0-.82.656-1.5 1.5-1.5h7.875c.61 0 1.125.516 1.125 1.125v3.54c-.281.07-.516.163-.75.304V4.625a.4.4 0 0 0-.375-.375H3v8.25h4.5c.023.258.07.516.14.75H1.5a.755.755 0 0 0-.75.75c0 .422.328.75.75.75h6.938c.234.305.492.54.796.75H1.5A1.48 1.48 0 0 1 0 14zm.75 0v7.71c.21-.116.469-.21.75-.21h.75V4.25H1.5A.755.755 0 0 0 .75 5m3.375 1.875c0-.187.164-.375.375-.375h3.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H4.5a.37.37 0 0 1-.375-.375m0 2.25c0-.187.164-.375.375-.375h3.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H4.5a.37.37 0 0 1-.375-.375m4.125 3c0-1.852 1.5-3.375 3.375-3.375A3.39 3.39 0 0 1 15 12.125a3.376 3.376 0 0 1-3.375 3.375 3.36 3.36 0 0 1-3.375-3.375m.75 0a2.62 2.62 0 0 0 2.625 2.625 2.636 2.636 0 0 0 2.625-2.625c0-1.43-1.195-2.625-2.625-2.625A2.636 2.636 0 0 0 9 12.125m1.125-.89a.97.97 0 0 1 .96-.985h.962a1.09 1.09 0 0 1 1.078 1.078c0 .399-.234.774-.586.961l-.562.281a.35.35 0 0 1-.352.305.37.37 0 0 1-.375-.375v-.14c0-.141.07-.282.188-.352l.75-.375a.37.37 0 0 0 .187-.305.35.35 0 0 0-.328-.328h-.961c-.117 0-.211.117-.211.234v.141c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375zm1.125 2.39c0-.187.164-.375.375-.375.188 0 .375.188.375.375 0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9f5efff016249f569d70cd16b4c665cb__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBookCircleQuestionCaptionRegularIcon);
exports.default = ForwardRef;
