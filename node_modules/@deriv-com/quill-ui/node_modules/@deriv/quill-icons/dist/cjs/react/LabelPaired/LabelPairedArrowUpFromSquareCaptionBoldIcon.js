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
const LabelPairedArrowUpFromSquareCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.398 3.664 9 6.29c.234.234.234.586 0 .797-.21.234-.562.234-.797 0L6.54 5.422v5.766a.54.54 0 0 1-.562.562.555.555 0 0 1-.563-.562V5.422L3.75 7.086a.513.513 0 0 1-.773 0c-.235-.211-.235-.563 0-.797l2.625-2.625c.21-.21.562-.21.796 0m-4.71.586h.187a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562h-.187a.555.555 0 0 0-.563.563v7.875c0 .328.234.562.563.562h8.625a.555.555 0 0 0 .562-.562V5.937a.57.57 0 0 0-.562-.562h-.188a.54.54 0 0 1-.562-.562c0-.305.234-.563.562-.563h.188c.914 0 1.687.773 1.687 1.688v7.875c0 .937-.773 1.687-1.687 1.687H1.688A1.68 1.68 0 0 1 0 13.813V5.937C0 5.024.75 4.25 1.688 4.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7d9db42887ea0236133b39b281ed5c75__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpFromSquareCaptionBoldIcon);
exports.default = ForwardRef;
