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
const LabelPairedDesktopLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 30, viewBox: '0 0 23 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.75 5.5h17.5c1.367 0 2.5 1.133 2.5 2.5v11.25c0 1.406-1.133 2.5-2.5 2.5h-6.875l.39 1.25H16.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-10c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h2.695l.43-1.25H2.75a2.47 2.47 0 0 1-2.5-2.5V8c0-1.367 1.094-2.5 2.5-2.5M20.25 8H2.75v8.75h17.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '364de04ce690e7a09fbf2668e65700aa__a' },
            React.createElement("path", { d: 'M0 0h23v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedDesktopLgFillIcon);
exports.default = ForwardRef;
