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
const LabelPairedChartAreaCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.125 4.813v8.25c0 .328.234.562.563.562h9.75a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-9.75A1.68 1.68 0 0 1 0 13.063v-8.25c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563m5.578 3.984L5.25 7.344 3.375 9.219v2.156h6.75V9.547L8.93 8.164l-.657.633a1.103 1.103 0 0 1-1.57 0M7.5 8l.773-.773.141-.141a.76.76 0 0 1 1.102.047l1.453 1.687c.164.211.281.47.281.727v2.203c0 .422-.352.75-.75.75H3a.74.74 0 0 1-.75-.75V9.219c0-.281.117-.586.328-.797l2.133-2.133a.765.765 0 0 1 1.055 0l.937.938z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9aa6c2ec5cc423f1f22feb2079bbac1b__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartAreaCaptionBoldIcon);
exports.default = ForwardRef;
