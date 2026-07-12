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
const LabelPairedSearchSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.063 9.438c0-1.56-.848-2.981-2.188-3.774a4.32 4.32 0 0 0-4.375 0 4.34 4.34 0 0 0-2.187 3.774c0 1.585.82 3.007 2.187 3.8a4.32 4.32 0 0 0 4.375 0c1.34-.793 2.188-2.215 2.188-3.8m-.848 4.484a5.73 5.73 0 0 1-3.527 1.203A5.683 5.683 0 0 1 0 9.438C0 6.32 2.543 3.75 5.688 3.75c3.117 0 5.687 2.57 5.687 5.688 0 1.34-.465 2.57-1.23 3.554l3.664 3.637c.246.273.246.683 0 .93-.274.273-.684.273-.93 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8c6d8ec256a3923108f1ad68fa3c6f56__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSearchSmBoldIcon);
exports.default = ForwardRef;
