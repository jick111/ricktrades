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
const LabelPairedMemoPadCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.625 6.5h-8.25V14c0 .21.164.375.375.375h7.5A.385.385 0 0 0 9.625 14zm-7.875-3h7.5c.82 0 1.5.68 1.5 1.5v9c0 .844-.68 1.5-1.5 1.5h-7.5A1.48 1.48 0 0 1 .25 14V5c0-.82.656-1.5 1.5-1.5m.75 4.688c0-.305.234-.563.563-.563h4.874a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H3.063a.54.54 0 0 1-.563-.562m0 2.25c0-.305.234-.563.563-.563h4.874a.57.57 0 0 1 .563.563.555.555 0 0 1-.562.562H3.063a.54.54 0 0 1-.563-.562m0 2.25c0-.305.234-.563.563-.563h2.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H3.063a.54.54 0 0 1-.563-.562' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2a9de01e2fcde7b6e282b4d9e62dcf61__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMemoPadCaptionBoldIcon);
exports.default = ForwardRef;
