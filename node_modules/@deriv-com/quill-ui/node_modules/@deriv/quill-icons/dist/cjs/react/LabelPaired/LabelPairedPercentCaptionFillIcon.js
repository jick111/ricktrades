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
const LabelPairedPercentCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.766 6.29-7.5 7.5a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.056l7.5-7.5a.723.723 0 0 1 1.055 0 .723.723 0 0 1 0 1.055M3 6.5c0 .54-.305 1.031-.75 1.313a1.55 1.55 0 0 1-1.5 0A1.52 1.52 0 0 1 0 6.5c0-.516.281-1.008.75-1.29a1.55 1.55 0 0 1 1.5 0c.445.282.75.774.75 1.29m6 6c0 .54-.305 1.031-.75 1.313a1.55 1.55 0 0 1-1.5 0A1.52 1.52 0 0 1 6 12.5c0-.516.281-1.008.75-1.29a1.55 1.55 0 0 1 1.5 0c.445.282.75.774.75 1.29' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e2eaf7d0320be691dc95f2077b6d2ab5__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPercentCaptionFillIcon);
exports.default = ForwardRef;
