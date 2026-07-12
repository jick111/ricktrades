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
const LabelPairedArrowRightToLineCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.75 5.563v7.875a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562V5.562c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563M7.563 9.922l-3.188 3a.58.58 0 0 1-.797-.024c-.21-.234-.21-.585.024-.796l2.156-2.04H.813A.54.54 0 0 1 .25 9.5c0-.305.234-.562.563-.562h4.945L3.602 6.922c-.235-.211-.235-.563-.024-.797s.563-.234.797-.023l3.188 3a.58.58 0 0 1 .187.398c0 .164-.07.305-.187.422' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0cb61220841664fb53e42da7e5e76797__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRightToLineCaptionBoldIcon);
exports.default = ForwardRef;
