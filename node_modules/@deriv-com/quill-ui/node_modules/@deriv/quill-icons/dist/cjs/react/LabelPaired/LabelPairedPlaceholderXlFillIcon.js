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
const LabelPairedPlaceholderXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.5 7.5H6v3H4.5c-.844 0-1.5.703-1.5 1.5v1.5H0V12c0-2.484 2.016-4.5 4.5-4.5M0 15h3v6H0zm18 0h3v6h-3zm3-1.5h-3V12c0-.797-.703-1.5-1.5-1.5H15v-3h1.5c2.484 0 4.5 2.016 4.5 4.5zm0 9V24c0 2.484-2.016 4.5-4.5 4.5H15v-3h1.5c.797 0 1.5-.656 1.5-1.5v-1.5zm-18 0V24c0 .844.656 1.5 1.5 1.5H6v3H4.5A4.5 4.5 0 0 1 0 24v-1.5zm4.5 6v-3h6v3zm0-18v-3h6v3z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd221f37df3d3356404f9b1bfe1c12bb6__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPlaceholderXlFillIcon);
exports.default = ForwardRef;
