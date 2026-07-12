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
const LabelPairedChartOhlcCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.5 3.5a.57.57 0 0 1 .563.563V5H9a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562h-.937v7.313A.555.555 0 0 1 7.5 14a.54.54 0 0 1-.562-.562V12.5H6a.54.54 0 0 1-.562-.562c0-.305.234-.563.562-.563h.938V4.063c0-.305.234-.563.562-.563M12.375 5a.57.57 0 0 1 .563.563v4.312h.937a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562h-.937v.938a.555.555 0 0 1-.563.562.54.54 0 0 1-.562-.562V7.625h-.938a.54.54 0 0 1-.562-.562c0-.305.234-.563.562-.563h.938v-.937c0-.305.234-.563.562-.563m-9.75 3a.57.57 0 0 1 .563.563v4.312h.937a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562h-.937v.938a.555.555 0 0 1-.563.562.54.54 0 0 1-.562-.562v-4.313h-.938a.54.54 0 0 1-.562-.562c0-.305.234-.563.562-.563h.938v-.937c0-.305.234-.563.562-.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ee357f21a379fb06cb11a01378f7b45f__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartOhlcCaptionBoldIcon);
exports.default = ForwardRef;
