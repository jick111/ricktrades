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
const LabelPairedFloppyDiskXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 7.5h11.344c.797 0 1.594.328 2.156.89L20.11 12c.562.563.89 1.36.89 2.156V25.5c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3M3 12v3c0 .844.656 1.5 1.5 1.5h9c.797 0 1.5-.656 1.5-1.5v-3c0-.797-.703-1.5-1.5-1.5h-9c-.844 0-1.5.703-1.5 1.5m7.5 7.5c-1.078 0-2.062.61-2.625 1.5-.516.938-.516 2.11 0 3a3.05 3.05 0 0 0 2.625 1.5c1.031 0 2.016-.562 2.578-1.5.516-.89.516-2.062 0-3-.562-.89-1.547-1.5-2.578-1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a3ae65d39653f35309a2d9a59aa0bb34__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFloppyDiskXlFillIcon);
exports.default = ForwardRef;
