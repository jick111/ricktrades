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
const LabelPairedPageCircleArrowRightCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 5c0-.82.656-1.5 1.5-1.5h4.242c.399 0 .774.164 1.055.445l1.758 1.758c.28.281.445.656.445 1.055v1.406c-.281.07-.516.164-.75.305V6.758a.76.76 0 0 0-.234-.54L6.53 4.485a.76.76 0 0 0-.539-.234H1.75A.755.755 0 0 0 1 5v9c0 .422.328.75.75.75h5.438c.234.281.492.54.773.75H1.75A1.48 1.48 0 0 1 .25 14zM7 12.125c0-1.852 1.5-3.375 3.375-3.375a3.39 3.39 0 0 1 3.375 3.375 3.376 3.376 0 0 1-3.375 3.375A3.36 3.36 0 0 1 7 12.125m.75 0a2.62 2.62 0 0 0 2.625 2.625A2.636 2.636 0 0 0 13 12.125c0-1.43-1.195-2.625-2.625-2.625a2.636 2.636 0 0 0-2.625 2.625m.75 0c0-.187.164-.375.375-.375h2.086l-.68-.656a.397.397 0 0 1 0-.54c.14-.14.399-.14.54 0l1.312 1.313c.14.14.14.399 0 .54l-1.313 1.312a.397.397 0 0 1-.539 0 .397.397 0 0 1 0-.54l.68-.679H8.875a.37.37 0 0 1-.375-.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a3f33183a278a2458d18dd59c70c5427__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPageCircleArrowRightCaptionRegularIcon);
exports.default = ForwardRef;
