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
const LabelPairedMobileNotchLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 30, viewBox: '0 0 15 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10 7.375V8a.64.64 0 0 1-.625.625h-3.75A.617.617 0 0 1 5 8v-.625H3.75c-.703 0-1.25.586-1.25 1.25v13.75c0 .703.547 1.25 1.25 1.25h7.5c.664 0 1.25-.547 1.25-1.25V8.625c0-.664-.586-1.25-1.25-1.25zM.625 8.625A3.11 3.11 0 0 1 3.75 5.5h7.5a3.134 3.134 0 0 1 3.125 3.125v13.75A3.11 3.11 0 0 1 11.25 25.5h-7.5c-1.758 0-3.125-1.367-3.125-3.125z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd1651a5c38feff57afc814dca25a7eb0__a' },
            React.createElement("path", { d: 'M0 0h15v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMobileNotchLgBoldIcon);
exports.default = ForwardRef;
