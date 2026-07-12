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
const LabelPairedLightChartLineUpDownClockXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v16.5c0 1.266.984 2.25 2.25 2.25h12.14c.282.563.61 1.078.985 1.5H3.75C1.64 28.5 0 26.86 0 24.75zm4.688 9.984 4.5-4.5a.78.78 0 0 1 .562-.234c.188 0 .375.094.516.234L13.5 16.97a830 830 0 0 1 6.422-6.469H17.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h4.5c.375 0 .75.375.75.75v4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-2.672c-2.344 2.344-4.687 4.64-6.984 6.985-.282.28-.797.28-1.078 0a206 206 0 0 1-3.188-3.235C8.39 16.641 7.078 18 5.766 19.313c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079M16.5 23.25c0-3.703 3-6.75 6.75-6.75 3.703 0 6.75 3.047 6.75 6.75C30 27 26.953 30 23.25 30c-3.75 0-6.75-3-6.75-6.75m1.5 0a5.24 5.24 0 0 0 5.25 5.25c2.86 0 5.25-2.344 5.25-5.25 0-2.86-2.39-5.25-5.25-5.25-2.906 0-5.25 2.39-5.25 5.25m4.5-3c0-.375.328-.75.75-.75.375 0 .75.375.75.75v2.25h1.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-2.25a.74.74 0 0 1-.75-.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e3812f6d93961deba2555db18d805844__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLightChartLineUpDownClockXlRegularIcon);
exports.default = ForwardRef;
