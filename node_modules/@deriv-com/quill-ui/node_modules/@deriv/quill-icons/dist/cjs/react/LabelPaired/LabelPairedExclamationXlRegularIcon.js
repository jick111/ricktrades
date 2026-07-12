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
const LabelPairedExclamationXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 3, height: 36, viewBox: '0 0 3 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.25 8.25V22.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75M1.5 28.125C.844 28.125.375 27.656.375 27c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 1.5 28.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4624bbbc3cfc511b6afff38dad8eed4f__a' },
            React.createElement("path", { d: 'M0 0h3v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExclamationXlRegularIcon);
exports.default = ForwardRef;
