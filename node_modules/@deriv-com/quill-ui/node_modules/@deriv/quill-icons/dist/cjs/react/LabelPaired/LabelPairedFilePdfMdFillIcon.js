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
const LabelPairedFilePdfMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 6c0-1.094.875-2 2-2h5v4c0 .563.438 1 1 1h4v4.5H5.5c-1.125 0-2 .906-2 2V20H2c-1.125 0-2-.875-2-2zm12 2H8V4zm-6.5 7h1c.938 0 1.75.813 1.75 1.75 0 .969-.812 1.75-1.75 1.75H6v1c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-4c0-.25.219-.5.5-.5m1 2.5a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75H6v1.5zm3-2.5h1c.813 0 1.5.688 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-1a.494.494 0 0 1-.5-.5v-4c0-.25.219-.5.5-.5m1 4c.25 0 .5-.219.5-.5v-2c0-.25-.25-.5-.5-.5H10v3zm2.5-3.5c0-.25.219-.5.5-.5H15c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-1v1h1c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-1v1.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-4' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7d49cf2faac6e9db66b7d90c5f4d5e8e__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFilePdfMdFillIcon);
exports.default = ForwardRef;
