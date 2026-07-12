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
const LabelPairedUserCheckSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.375 4.625c-.957 0-1.805.52-2.297 1.313a2.65 2.65 0 0 0 0 2.625 2.65 2.65 0 0 0 2.297 1.312c.93 0 1.777-.492 2.27-1.312a2.65 2.65 0 0 0 0-2.626c-.493-.792-1.34-1.312-2.27-1.312m0 6.125A3.48 3.48 0 0 1 3.34 9a3.48 3.48 0 0 1 0-3.5 3.54 3.54 0 0 1 3.035-1.75c1.23 0 2.379.684 3.008 1.75a3.48 3.48 0 0 1 0 3.5 3.47 3.47 0 0 1-3.008 1.75m-1.258 2.188a4.004 4.004 0 0 0-3.992 3.937h10.5c-.055-2.16-1.832-3.937-4.02-3.937zm0-.876h2.488a4.89 4.89 0 0 1 4.895 4.895c0 .438-.383.793-.82.793H1.043a.794.794 0 0 1-.793-.793c0-2.707 2.16-4.895 4.867-4.895m12.496-3.171-3.5 3.5a.463.463 0 0 1-.629 0l-1.75-1.75a.463.463 0 0 1 0-.63.463.463 0 0 1 .63 0l1.448 1.45 3.172-3.2a.463.463 0 0 1 .63 0 .463.463 0 0 1 0 .63' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9e9f124d415633d62f82a2e6609091a3__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUserCheckSmRegularIcon);
exports.default = ForwardRef;
