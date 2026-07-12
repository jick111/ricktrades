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
const LabelPairedWalletCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.063 4.25h8.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H2.063a.925.925 0 0 0-.938.938v6.375c0 .539.398.937.938.937h7.874a.925.925 0 0 0 .938-.937V8.561a.94.94 0 0 0-.937-.937H2.811a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563h7.124A2.08 2.08 0 0 1 12 8.563v4.124a2.066 2.066 0 0 1-2.062 2.063H2.061A2.05 2.05 0 0 1 0 12.688V6.312C0 5.188.914 4.25 2.063 4.25M9 11.375a.74.74 0 0 1-.75-.75c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '56b9513bf0969a50dc50e19d2c3f9606__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWalletCaptionBoldIcon);
exports.default = ForwardRef;
