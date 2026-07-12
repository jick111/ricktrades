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
const LabelPairedChartMixedMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm15.719 6.344-5.25 4.5a.8.8 0 0 1-.969 0L5.938 7.719l-4.782 3.156a.717.717 0 0 1-1.031-.187c-.25-.344-.156-.813.188-1.063l5.25-3.5a.75.75 0 0 1 .906.063L10 9.28l4.75-4.094a.78.78 0 0 1 1.063.094.78.78 0 0 1-.094 1.063M6.25 17.5v-5a.27.27 0 0 0-.25-.25.246.246 0 0 0-.25.25v5c0 .156.094.25.25.25.125 0 .25-.094.25-.25M6 11c.813 0 1.5.688 1.5 1.5v5A1.5 1.5 0 0 1 6 19a1.48 1.48 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 6 11m-3.75 6.5v-2a.27.27 0 0 0-.25-.25.246.246 0 0 0-.25.25v2c0 .156.094.25.25.25.125 0 .25-.094.25-.25M2 14c.813 0 1.5.688 1.5 1.5v2A1.5 1.5 0 0 1 2 19a1.48 1.48 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 2 14m8.25.5a.27.27 0 0 0-.25-.25.246.246 0 0 0-.25.25v3c0 .156.094.25.25.25.125 0 .25-.094.25-.25zm-1.75 0A1.5 1.5 0 0 1 10 13c.813 0 1.5.688 1.5 1.5v3A1.5 1.5 0 0 1 10 19a1.48 1.48 0 0 1-1.5-1.5zm5.75 3v-5a.27.27 0 0 0-.25-.25.247.247 0 0 0-.25.25v5c0 .156.094.25.25.25.125 0 .25-.094.25-.25M14 11c.813 0 1.5.688 1.5 1.5v5A1.5 1.5 0 0 1 14 19a1.48 1.48 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 14 11' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ac033da625aef42b04d8fb6fa13ab75c__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartMixedMdBoldIcon);
exports.default = ForwardRef;
