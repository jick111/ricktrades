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
const LabelPairedEnvelopeSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 6.813a.45.45 0 0 0-.437.437v.629l4.703 3.855a1.526 1.526 0 0 0 1.941 0l4.73-3.855V7.25a.47.47 0 0 0-.437-.437zm-.437 2.761v4.676c0 .246.19.438.437.438h10.5a.45.45 0 0 0 .438-.438V9.574l-3.883 3.172c-1.067.875-2.57.875-3.61 0zM0 7.25C0 6.293.766 5.5 1.75 5.5h10.5c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.75C.766 16 0 15.234 0 14.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '749a835e79687e308c9c8f8994f1373b__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEnvelopeSmBoldIcon);
exports.default = ForwardRef;
