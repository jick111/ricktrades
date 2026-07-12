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
const LabelPairedSterlingSignLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 30, viewBox: '0 0 13 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.375 11.438V15.5h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-6.29A15.6 15.6 0 0 1 1.892 23h10.234c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H.875a.68.68 0 0 1-.547-.273.6.6 0 0 1 0-.625l.04-.079a14 14 0 0 0 1.718-6.523H.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h1.25v-4.062A4.676 4.676 0 0 1 6.813 6.75h.273c.508 0 .976.117 1.484.273l3.125 1.016c.313.117.47.469.39.82-.116.313-.468.47-.82.391L8.142 8.195A3.2 3.2 0 0 0 7.086 8h-.274a3.443 3.443 0 0 0-3.437 3.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7089c53d0e3af7001881de3d0b156d47__a' },
            React.createElement("path", { d: 'M0 0h13v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSterlingSignLgRegularIcon);
exports.default = ForwardRef;
