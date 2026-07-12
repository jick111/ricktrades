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
const LabelPairedGripDotsVerticalLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 30, viewBox: '0 0 10 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 11.125a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.876.35-.546.937-.937 1.64-.937.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.874-.352.586-.938.938-1.602.938m0 6.25a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.875.35-.547.937-.938 1.64-.938.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.874-.352.586-.938.938-1.602.938M3.75 21.75c0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.876 0A1.87 1.87 0 0 1 0 21.75c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.875 0 .546.352.937.938.937 1.602m4.375-10.625a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.876.35-.546.937-.937 1.64-.937.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.874-.352.586-.938.938-1.602.938M10 15.5c0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.876 0a1.87 1.87 0 0 1-.937-1.64c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.875 0 .546.352.937.938.937 1.602m-1.875 8.125a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.875.35-.547.937-.938 1.64-.938.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.875-.352.585-.938.937-1.602.937' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '96d19e978cb078468cc9625e692a3dd1__a' },
            React.createElement("path", { d: 'M0 0h10v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGripDotsVerticalLgFillIcon);
exports.default = ForwardRef;
