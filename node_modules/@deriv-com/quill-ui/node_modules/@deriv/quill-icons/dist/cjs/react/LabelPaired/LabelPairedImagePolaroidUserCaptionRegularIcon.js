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
const LabelPairedImagePolaroidUserCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.125 12.5H1v.75c0 .422.328.75.75.75h7.5c.398 0 .75-.328.75-.75v-.75zm-.047-.75H10v-6A.77.77 0 0 0 9.25 5h-7.5a.755.755 0 0 0-.75.75v6h1.898a1.91 1.91 0 0 1 1.852-1.5h1.5c.89 0 1.664.656 1.828 1.5m-4.406 0h3.633C7.14 11.328 6.719 11 6.25 11h-1.5c-.492 0-.914.328-1.078.75m7.078-6v7.5c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5M6.25 8a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75M5.5 6.5c.516 0 1.008.305 1.29.75a1.55 1.55 0 0 1 0 1.5c-.282.469-.774.75-1.29.75-.54 0-1.031-.281-1.312-.75a1.55 1.55 0 0 1 0-1.5c.28-.445.773-.75 1.312-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2d4a32364d7ea896dfbe0ff474a10f43__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedImagePolaroidUserCaptionRegularIcon);
exports.default = ForwardRef;
