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
const LabelPairedShieldCheckXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm12.61 6.14 8.812 3.75c1.031.47 1.828 1.454 1.828 2.672-.047 4.688-1.969 13.172-10.031 17.063a2.88 2.88 0 0 1-2.485 0C2.672 25.735.75 17.25.75 12.563c-.047-1.22.75-2.204 1.781-2.672l8.813-3.75a1.5 1.5 0 0 1 1.265 0m2.015 9.61c0-1.406-1.219-2.625-2.625-2.625-1.453 0-2.625 1.219-2.625 2.625 0 1.078.61 1.969 1.5 2.39v3.235c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125v-3.234c.844-.422 1.5-1.313 1.5-2.391' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '25590434b96503188f20502fd9797e48__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedShieldCheckXlFillIcon);
exports.default = ForwardRef;
