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
const LabelPairedChevronsLeftSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm1.285 10.285 5.25-5.222c.246-.274.656-.274.93 0a.644.644 0 0 1 0 .902L2.652 10.75l4.786 4.813a.6.6 0 0 1 0 .902.6.6 0 0 1-.903 0l-5.25-5.25c-.273-.246-.273-.656 0-.93m10.5-5.25v.027c.246-.273.656-.273.93 0a.644.644 0 0 1 0 .903l-4.813 4.812 4.786 4.786a.6.6 0 0 1 0 .902.6.6 0 0 1-.903 0l-5.25-5.25c-.273-.246-.273-.656 0-.93z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ab8674f648e3a1c663c3d55ab0a4766e__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChevronsLeftSmBoldIcon);
exports.default = ForwardRef;
