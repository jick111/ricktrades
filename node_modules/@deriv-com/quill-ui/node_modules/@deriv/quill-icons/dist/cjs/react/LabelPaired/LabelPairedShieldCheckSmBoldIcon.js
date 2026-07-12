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
const LabelPairedShieldCheckSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.996 7.223c-.164.082-.246.218-.246.355 0 2.516 1.04 6.809 5.086 8.75a.3.3 0 0 0 .3 0c4.048-1.914 5.087-6.234 5.114-8.75 0-.137-.11-.273-.246-.355L7 5.117zm10.5-1.203c.602.273 1.066.847 1.066 1.558-.027 2.734-1.148 7.684-5.851 9.953a1.68 1.68 0 0 1-1.45 0C1.56 15.261.439 10.313.439 7.578.41 6.868.875 6.293 1.477 6.02l5.14-2.188a.87.87 0 0 1 .738 0zM8.531 9.438c0 .628-.383 1.148-.875 1.394v1.887c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-1.887a1.52 1.52 0 0 1-.875-1.395c0-.82.683-1.53 1.531-1.53.82 0 1.531.71 1.531 1.53' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '59e5716fa2f413cefe70afb8fe3b99cd__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedShieldCheckSmBoldIcon);
exports.default = ForwardRef;
