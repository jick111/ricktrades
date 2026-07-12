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
const LabelPairedMobileNotchRotateLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 30, viewBox: '0 0 23 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.875 8.625A3.11 3.11 0 0 1 4 5.5h7.5a3.134 3.134 0 0 1 3.125 3.125v4.844c-.195.078-.39.195-.586.273-.39-.43-.976-.742-1.601-.742-.118 0-.235.04-.313.04V8.624c0-.312-.312-.625-.625-.625h-1.25v.625a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625V8H4a.64.64 0 0 0-.625.625v13.75c0 .352.273.625.625.625h6.992c.43.86 1.055 1.64 1.797 2.227-.39.195-.86.273-1.328.273H4c-1.758 0-3.125-1.367-3.125-3.125zm4.375 12.5c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625m6.25-5.937c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v.507a5.53 5.53 0 0 1 3.75-1.445c2.305 0 4.258 1.406 5.156 3.398a.935.935 0 0 1-.508 1.211c-.468.235-1.015 0-1.21-.468-.586-1.328-1.915-2.266-3.438-2.266-1.133 0-2.11.508-2.812 1.25h1.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-3.126c-.546 0-.937-.39-.937-.937zm.469 6.953c-.235-.47 0-1.016.469-1.25.468-.196 1.015.039 1.25.507.546 1.329 1.874 2.227 3.437 2.227 1.094 0 2.11-.469 2.773-1.25h-1.21c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.125a.95.95 0 0 1 .937.938v3.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-.47a5.65 5.65 0 0 1-3.75 1.407c-2.344 0-4.297-1.367-5.156-3.36' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c24d96f15bd3d4ce232bc63fb056e0d6__a' },
            React.createElement("path", { d: 'M0 0h23v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMobileNotchRotateLgFillIcon);
exports.default = ForwardRef;
