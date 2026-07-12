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
const LabelPairedCopyCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.125 3.5h2.906c.281 0 .586.14.797.352l1.57 1.57c.211.21.352.516.352.797v5.156c0 .633-.516 1.125-1.125 1.125h-4.5A1.11 1.11 0 0 1 4 11.375v-6.75c0-.61.492-1.125 1.125-1.125m-3.75 3H3.25V8h-1.5v6h4.5v-.75h1.5v1.125c0 .633-.516 1.125-1.125 1.125h-5.25A1.11 1.11 0 0 1 .25 14.375v-6.75c0-.61.492-1.125 1.125-1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e9c62124477ee7075b2cff753be90a0e__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCopyCaptionFillIcon);
exports.default = ForwardRef;
