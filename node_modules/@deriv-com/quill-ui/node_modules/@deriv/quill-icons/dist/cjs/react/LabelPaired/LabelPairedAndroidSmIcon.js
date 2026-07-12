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
const LabelPairedAndroidSmIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.61 12.008a.65.65 0 0 0 .656-.656c0-.356-.301-.657-.657-.657-.355 0-.656.301-.656.657 0 .382.3.656.656.656m-7.247 0a.65.65 0 0 0 .657-.656c0-.356-.301-.657-.657-.657-.355 0-.656.301-.656.657 0 .382.3.656.656.656m7.492-3.938c2.243 1.23 3.774 3.5 4.02 6.18H.125a7.72 7.72 0 0 1 3.992-6.18L2.805 5.8a.25.25 0 0 1 0-.273q.081-.164.246-.164c.11 0 .191.082.246.164l1.312 2.297a8.3 8.3 0 0 1 6.754 0l1.313-2.297c.054-.082.136-.164.246-.164q.164 0 .246.164a.25.25 0 0 1 0 .274z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a85ce8f677318bcad3c730e1e8b4cacc__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedAndroidSmIcon);
exports.default = ForwardRef;
