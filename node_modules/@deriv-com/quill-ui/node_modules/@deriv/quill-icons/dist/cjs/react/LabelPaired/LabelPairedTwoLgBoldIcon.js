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
const LabelPairedTwoLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 30, viewBox: '0 0 13 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.992 8.625c-1.054 0-2.031.43-2.773 1.172l-1.367 1.367c-.391.39-.977.39-1.329 0a.856.856 0 0 1 0-1.289l1.368-1.406A5.83 5.83 0 0 1 5.992 6.75h.274c3.047 0 5.547 2.5 5.547 5.547 0 1.523-.665 2.969-1.758 4.023L3.53 22.375h8.282a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H1.188a.99.99 0 0 1-.899-.586.98.98 0 0 1 .234-1.016l8.243-7.695c.742-.703 1.172-1.68 1.172-2.656a3.67 3.67 0 0 0-3.672-3.672z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9d9bfd61e7c6e603077118a34bf0f680__a' },
            React.createElement("path", { d: 'M0 0h13v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTwoLgBoldIcon);
exports.default = ForwardRef;
