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
const LabelPairedArrowDownToBracketSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm10.602 9.629-3.5 3.5a.843.843 0 0 1-1.23 0l-3.5-3.5a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l2.023 1.996v-5.77c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v5.77l1.996-1.997a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23m-8.477 3.746v1.75c0 .492.383.875.875.875h7a.88.88 0 0 0 .875-.875v-1.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875v1.75A2.626 2.626 0 0 1 10 17.75H3a2.626 2.626 0 0 1-2.625-2.625v-1.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f46af8873f78f8f4d3c46ce2f46176a7__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownToBracketSmFillIcon);
exports.default = ForwardRef;
