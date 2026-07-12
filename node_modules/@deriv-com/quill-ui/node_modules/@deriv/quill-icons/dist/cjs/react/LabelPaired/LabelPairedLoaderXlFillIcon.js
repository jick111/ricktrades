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
const LabelPairedLoaderXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.5 7.5v3c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5m0 18v3c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5M0 18c0-.797.656-1.5 1.5-1.5h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 0 18m19.5-1.5h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-3A1.48 1.48 0 0 1 18 18c0-.797.656-1.5 1.5-1.5M3.516 9.516c.562-.563 1.5-.563 2.109 0l2.11 2.156c.609.562.609 1.547 0 2.11-.563.609-1.548.609-2.11 0l-2.11-2.11a1.5 1.5 0 0 1 0-2.156m14.812 12.75 2.156 2.109c.563.61.563 1.547 0 2.11a1.5 1.5 0 0 1-2.156 0l-2.11-2.11c-.562-.562-.562-1.547 0-2.11.61-.609 1.548-.609 2.11 0M3.516 26.484v.047a1.5 1.5 0 0 1 0-2.156l2.109-2.11a1.445 1.445 0 0 1 2.11 0c.609.563.609 1.547 0 2.11l-2.11 2.11c-.61.609-1.547.609-2.11 0m12.703-14.812 2.11-2.156a1.59 1.59 0 0 1 2.155 0c.563.609.563 1.547 0 2.156l-2.156 2.11c-.562.562-1.5.562-2.11 0-.562-.61-.562-1.548 0-2.11' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'dcb5c795fa01a41c805690cb61813d4d__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLoaderXlFillIcon);
exports.default = ForwardRef;
