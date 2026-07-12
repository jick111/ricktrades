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
const LabelPairedPuzzleXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M21 6c1.64 0 3 1.36 3 3v6c0 .422-.375.75-.75.75h-2.437a.57.57 0 0 0-.563.563v.187c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-.187c0-.282-.281-.563-.562-.563H15a.74.74 0 0 1-.75-.75v-1.5c0-.375.328-.75.75-.75h.75c.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5H15a.74.74 0 0 1-.75-.75V6.75c0-.375.328-.75.75-.75zM0 17.25V12c0-1.64 1.313-3 3-3h6.75c.375 0 .75.375.75.75v2.438c0 .328.234.562.563.562h.187c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-.187a.57.57 0 0 0-.563.563v2.437c0 .422-.375.75-.75.75h-1.5a.74.74 0 0 1-.75-.75V18c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5v.75c0 .422-.375.75-.75.75h-1.5v7.125c0 .656.469 1.125 1.125 1.125H10.5v-1.687c0-.282-.281-.563-.562-.563H9.75a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h.188a.57.57 0 0 0 .562-.562V20.25c0-.375.328-.75.75-.75h2.25c.375 0 .75.375.75.75V21c0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5v-.75c0-.375.328-.75.75-.75h2.25c.375 0 .75.375.75.75V27c0 1.688-1.36 3-3 3H3.375A3.36 3.36 0 0 1 0 26.625V17.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '99f0c43cb1214744721f07aa9693b4d1__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPuzzleXlBoldIcon);
exports.default = ForwardRef;
