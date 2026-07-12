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
const LabelPairedArrowRightArrowLeftCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm2.664 15.148-2.25-2.25c-.234-.21-.234-.562 0-.796l2.25-2.227a.513.513 0 0 1 .773 0 .513.513 0 0 1 0 .773l-1.289 1.29h8.04a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563l-8.04.023 1.29 1.289a.513.513 0 0 1 0 .773.513.513 0 0 1-.774 0m7.922-8.25-2.25 2.25c-.234.235-.586.235-.797 0-.234-.21-.234-.562 0-.796l1.29-1.29H.811A.54.54 0 0 1 .25 6.5c0-.305.234-.562.563-.562h8.015L7.54 4.648c-.234-.21-.234-.562 0-.796.211-.211.563-.211.797 0l2.25 2.273a.55.55 0 0 1 0 .773' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a9d7570ce06746ec9c4f9ed51c830953__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRightArrowLeftCaptionBoldIcon);
exports.default = ForwardRef;
