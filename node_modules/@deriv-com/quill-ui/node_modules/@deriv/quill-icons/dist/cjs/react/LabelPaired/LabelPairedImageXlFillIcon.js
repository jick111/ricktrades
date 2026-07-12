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
const LabelPairedImageXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 10.5c0-1.64 1.313-3 3-3h18c1.64 0 3 1.36 3 3v15c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm15.14 5.016a1.06 1.06 0 0 0-.89-.516c-.375 0-.75.188-.937.516l-4.079 6-1.265-1.594c-.188-.235-.516-.422-.844-.422a1.16 1.16 0 0 0-.89.422l-3 3.75c-.282.375-.329.844-.141 1.219.187.375.562.609 1.031.609h15.75c.375 0 .797-.187.984-.562.188-.375.141-.844-.093-1.172zM5.25 15c.797 0 1.5-.422 1.922-1.125.422-.656.422-1.547 0-2.25C6.75 10.969 6.047 10.5 5.25 10.5c-.844 0-1.547.469-1.969 1.125-.422.703-.422 1.594 0 2.25C3.703 14.578 4.406 15 5.25 15' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0a13a521cbf31bc134b6cbcbb68c0d87__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedImageXlFillIcon);
exports.default = ForwardRef;
