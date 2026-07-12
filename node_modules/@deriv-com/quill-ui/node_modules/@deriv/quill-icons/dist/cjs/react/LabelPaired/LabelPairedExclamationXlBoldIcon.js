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
const LabelPairedExclamationXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 3, height: 36, viewBox: '0 0 3 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.625 8.625v13.5A1.11 1.11 0 0 1 1.5 23.25c-.656 0-1.125-.469-1.125-1.125v-13.5C.375 8.015.844 7.5 1.5 7.5c.61 0 1.125.516 1.125 1.125M1.5 28.5A1.48 1.48 0 0 1 0 27c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'bf9b3c9438a0a9c16cd6726a1d2a8007__a' },
            React.createElement("path", { d: 'M0 0h3v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExclamationXlBoldIcon);
exports.default = ForwardRef;
