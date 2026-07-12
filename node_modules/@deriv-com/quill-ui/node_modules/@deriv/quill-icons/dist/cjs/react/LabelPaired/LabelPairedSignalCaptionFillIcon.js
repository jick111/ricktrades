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
const LabelPairedSignalCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.5 3.5c.398 0 .75.352.75.75v10.5c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V4.25c0-.398.328-.75.75-.75m-3 2.25c.398 0 .75.352.75.75v8.25c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V6.5c0-.398.328-.75.75-.75m-2.25 3v6c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-6c0-.398.328-.75.75-.75.398 0 .75.352.75.75m-3.75 1.5c.398 0 .75.352.75.75v3.75c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V11c0-.398.328-.75.75-.75m-2.25 3v1.5c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '638be23ba64275c21b627e1b2320e6e0__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSignalCaptionFillIcon);
exports.default = ForwardRef;
