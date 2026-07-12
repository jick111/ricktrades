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
const LabelPairedImageCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 5.75c0-.82.656-1.5 1.5-1.5h9c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-9a1.48 1.48 0 0 1-1.5-1.5zm7.57 2.508A.53.53 0 0 0 7.125 8a.54.54 0 0 0-.469.258l-2.039 3-.633-.797a.57.57 0 0 0-.421-.211.58.58 0 0 0-.446.21l-1.5 1.876a.58.58 0 0 0-.07.61.56.56 0 0 0 .516.304h7.875c.187 0 .398-.094.492-.281a.58.58 0 0 0-.047-.586zM2.625 8c.398 0 .75-.21.96-.562.212-.329.212-.774 0-1.125-.21-.329-.562-.563-.96-.563-.422 0-.773.234-.984.563-.211.351-.211.796 0 1.125.21.351.562.562.984.562' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c3d404a7e663344c3f3a31c9230ea8f0__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedImageCaptionFillIcon);
exports.default = ForwardRef;
