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
const LabelPairedHorizontalRuleDashedCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 9.5c0-.305.234-.562.563-.562h1.5a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563h-1.5A.54.54 0 0 1 0 9.5m4.125 0c0-.305.234-.562.563-.562h1.5a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563h-1.5a.54.54 0 0 1-.563-.563m4.125 0c0-.305.234-.562.563-.562h1.5a.57.57 0 0 1 .562.562.555.555 0 0 1-.562.563h-1.5A.54.54 0 0 1 8.25 9.5m4.125 0c0-.305.234-.562.563-.562h1.5A.57.57 0 0 1 15 9.5a.555.555 0 0 1-.562.563h-1.5a.54.54 0 0 1-.563-.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2d8f77d117262a87c30db4c05d290d68__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedHorizontalRuleDashedCaptionBoldIcon);
exports.default = ForwardRef;
