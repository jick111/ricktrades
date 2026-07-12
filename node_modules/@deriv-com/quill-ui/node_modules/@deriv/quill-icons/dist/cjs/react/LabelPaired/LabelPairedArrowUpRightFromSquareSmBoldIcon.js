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
const LabelPairedArrowUpRightFromSquareSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.313 4.406c0-.355.273-.656.656-.656h4.347c.383 0 .657.3.657.656v4.375a.63.63 0 0 1-.657.656.65.65 0 0 1-.656-.656V5.992L6.563 12.09a.6.6 0 0 1-.903 0c-.273-.246-.273-.656 0-.93l6.098-6.097h-2.79a.63.63 0 0 1-.655-.657m-6.344.219h3.5c.355 0 .656.3.656.656 0 .383-.3.657-.656.657h-3.5c-.383 0-.657.3-.657.656v9.187c0 .383.274.656.657.656h9.187a.65.65 0 0 0 .656-.656v-3.5c0-.355.274-.656.657-.656.355 0 .656.3.656.656v3.5a1.98 1.98 0 0 1-1.969 1.969H1.97A1.96 1.96 0 0 1 0 15.781V6.594c0-1.067.875-1.969 1.969-1.969' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3c57ae666007e03ed97bcba6e186a9f9__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpRightFromSquareSmBoldIcon);
exports.default = ForwardRef;
