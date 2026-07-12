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
const LabelPairedUserMinusSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.375 5.063c-.793 0-1.504.437-1.914 1.093-.383.684-.383 1.532 0 2.188a2.22 2.22 0 0 0 1.914 1.094c.766 0 1.477-.41 1.887-1.094.383-.656.383-1.504 0-2.188-.41-.656-1.121-1.093-1.887-1.093m0 5.687A3.48 3.48 0 0 1 3.34 9a3.48 3.48 0 0 1 0-3.5 3.54 3.54 0 0 1 3.035-1.75c1.23 0 2.379.684 3.008 1.75a3.48 3.48 0 0 1 0 3.5 3.47 3.47 0 0 1-3.008 1.75m-1.258 2.625a3.57 3.57 0 0 0-3.527 3.063h9.543a3.57 3.57 0 0 0-3.528-3.063zm0-1.312h2.488a4.89 4.89 0 0 1 4.895 4.894c0 .438-.383.793-.82.793H1.043a.794.794 0 0 1-.793-.793c0-2.707 2.16-4.895 4.867-4.895m8.04-2.844h3.937c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-3.938a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a96b4b7d3814ad40dab60a66ac77131d__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUserMinusSmBoldIcon);
exports.default = ForwardRef;
