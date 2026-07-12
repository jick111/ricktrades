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
const LabelPairedComputerMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12 6.5H2c-.281 0-.5.25-.5.5v7c0 .281.219.5.5.5h10c.25 0 .5-.219.5-.5V7c0-.25-.25-.5-.5-.5M2 16c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v7c0 1.125-.906 2-2 2H9.281l.5 1.5h1.469a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-8.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.438l.5-1.5zm3.781 1.5h2.407l-.5-1.5H6.28zM16.5 6.5v1h2v-1zm0 2.5v1h2V9zm2 2.5h-2v6h2zm-3.5-5A1.5 1.5 0 0 1 16.5 5h2c.813 0 1.5.688 1.5 1.5v11a1.5 1.5 0 0 1-1.5 1.5h-2a1.48 1.48 0 0 1-1.5-1.5zm2.5 8.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7a0c1308ade52e0aa69e169e74cd09a7__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedComputerMdBoldIcon);
exports.default = ForwardRef;
