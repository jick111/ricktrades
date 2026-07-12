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
const LabelPairedChartLineUpDownMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1 5.5v11c0 .844.656 1.5 1.5 1.5h13c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-13A2.47 2.47 0 0 1 0 16.5v-11c0-.25.219-.5.5-.5.25 0 .5.25.5.5M11.5 7a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h3c.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V7.719l-4.656 4.656a.53.53 0 0 1-.719 0L6.5 10.219l-2.656 2.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l3-3A.52.52 0 0 1 6.5 9c.125 0 .25.063.344.156L9 11.312 13.281 7zm0 9a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h1.781l-2.156-2.125.719-.719L14 14.312V12.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1776411d80064d36dadb53ed69cb5c92__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineUpDownMdRegularIcon);
exports.default = ForwardRef;
