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
const LabelPairedSearchMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13 10.5a6.5 6.5 0 0 1-1.25 3.844l3.938 3.969a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0l-3.969-3.969C9.25 16.563 7.906 17 6.5 17A6.495 6.495 0 0 1 0 10.5C0 6.938 2.906 4 6.5 4c3.563 0 6.5 2.938 6.5 6.5M6.5 15a4.46 4.46 0 0 0 3.875-2.25 4.46 4.46 0 0 0 0-4.5C9.563 6.875 8.094 6 6.5 6a4.54 4.54 0 0 0-3.906 2.25 4.46 4.46 0 0 0 0 4.5A4.47 4.47 0 0 0 6.5 15' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9c211cfdaba034af4d5dc00e487f31cb__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSearchMdFillIcon);
exports.default = ForwardRef;
