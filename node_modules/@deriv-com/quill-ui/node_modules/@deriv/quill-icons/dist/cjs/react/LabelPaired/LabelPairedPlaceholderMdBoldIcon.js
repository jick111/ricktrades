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
const LabelPairedPlaceholderMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.75 5h.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-.5c-.719 0-1.25.563-1.25 1.25v.5A.74.74 0 0 1 .75 9 .72.72 0 0 1 0 8.25v-.5C0 6.25 1.219 5 2.75 5m-2 5a.76.76 0 0 1 .75.75v2.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-2.5A.74.74 0 0 1 .75 10m12.5 0a.76.76 0 0 1 .75.75v2.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-2.5a.74.74 0 0 1 .75-.75m0-1a.72.72 0 0 1-.75-.75v-.5c0-.687-.562-1.25-1.25-1.25h-.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h.5C12.75 5 14 6.25 14 7.75v.5a.74.74 0 0 1-.75.75m.75 6.75v.5c0 1.531-1.25 2.75-2.75 2.75h-.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h.5c.688 0 1.25-.531 1.25-1.25v-.5a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75m-12.5 0v.5c0 .719.531 1.25 1.25 1.25h.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-.5A2.734 2.734 0 0 1 0 16.25v-.5A.74.74 0 0 1 .75 15a.76.76 0 0 1 .75.75M5.75 19a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75zM5 5.75A.74.74 0 0 1 5.75 5h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2.5A.72.72 0 0 1 5 5.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7268bb5fca81efa0a57c27e9fa8bb7d3__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPlaceholderMdBoldIcon);
exports.default = ForwardRef;
