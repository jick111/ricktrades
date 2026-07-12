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
const LabelPairedBellSlashCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm.89 3.64 3.47 2.696c.538-.82 1.382-1.43 2.39-1.617V4.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75v.469c1.71.328 3 1.851 3 3.656v.445c0 1.102.398 2.18 1.125 3l.164.188c.211.234.258.539.14.82 0 0-.023 0-.023.024l2.11 1.664c.257.187.304.539.093.773a.518.518 0 0 1-.773.094L.21 4.508a.518.518 0 0 1-.094-.774.518.518 0 0 1 .774-.093m8.626 9.61H3c-.305 0-.586-.164-.703-.422a.76.76 0 0 1 .14-.82l.165-.188a4.56 4.56 0 0 0 1.148-3v-.093zm-.961 1.828A1.47 1.47 0 0 1 7.5 15.5c-.398 0-.797-.14-1.078-.422S6 14.398 6 14h3c0 .398-.164.797-.445 1.078' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5057762d6a8a3499e16710ec8befb410__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBellSlashCaptionFillIcon);
exports.default = ForwardRef;
