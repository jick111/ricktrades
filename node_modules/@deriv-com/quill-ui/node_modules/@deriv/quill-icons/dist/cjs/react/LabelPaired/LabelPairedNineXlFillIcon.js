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
const LabelPairedNineXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 15c0 1.64.844 3.094 2.25 3.938 1.36.796 3.094.796 4.5 0C11.11 18.094 12 16.64 12 15c0-1.594-.89-3.047-2.25-3.89-1.406-.797-3.14-.797-4.5 0C3.844 11.952 3 13.405 3 15m4.078 7.5C3.141 22.313 0 19.031 0 15c0-4.125 3.328-7.5 7.5-7.5 4.125 0 7.5 3.375 7.5 7.5 0 .14-.047.281-.047.375-.047 1.688-.703 3.281-1.781 4.594l-6.797 8.015c-.516.657-1.5.703-2.11.188-.656-.516-.702-1.5-.187-2.11z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '750b2835821603fd4e842c1d2d47fad5__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedNineXlFillIcon);
exports.default = ForwardRef;
