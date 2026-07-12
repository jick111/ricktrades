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
const LabelPairedLinkSimpleXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 18c0-4.125 3.328-7.5 7.5-7.5h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3a4.501 4.501 0 0 0 0 9h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3A7.46 7.46 0 0 1 0 18m27 0c0 4.172-3.375 7.5-7.5 7.5h-3A1.48 1.48 0 0 1 15 24c0-.797.656-1.5 1.5-1.5h3a4.501 4.501 0 0 0 0-9h-3A1.48 1.48 0 0 1 15 12c0-.797.656-1.5 1.5-1.5h3c4.125 0 7.5 3.375 7.5 7.5M9 16.5h9c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H9A1.48 1.48 0 0 1 7.5 18c0-.797.656-1.5 1.5-1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '221441298165197c4125fb746adee348__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLinkSimpleXlFillIcon);
exports.default = ForwardRef;
