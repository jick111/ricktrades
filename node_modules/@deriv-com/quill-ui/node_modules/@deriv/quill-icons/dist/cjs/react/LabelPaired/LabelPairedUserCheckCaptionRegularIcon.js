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
const LabelPairedUserCheckCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.25 4.25c-.82 0-1.547.445-1.969 1.125a2.27 2.27 0 0 0 0 2.25A2.27 2.27 0 0 0 5.25 8.75c.797 0 1.523-.422 1.945-1.125a2.27 2.27 0 0 0 0-2.25C6.773 4.695 6.047 4.25 5.25 4.25m0 5.25A2.98 2.98 0 0 1 2.648 8a2.99 2.99 0 0 1 0-3A3.03 3.03 0 0 1 5.25 3.5c1.055 0 2.04.586 2.578 1.5.54.938.54 2.086 0 3A2.97 2.97 0 0 1 5.25 9.5m-1.078 1.875A3.43 3.43 0 0 0 .75 14.75h9c-.047-1.852-1.57-3.375-3.445-3.375zm0-.75h2.133A4.19 4.19 0 0 1 10.5 14.82c0 .375-.328.68-.703.68H.68a.68.68 0 0 1-.68-.68 4.17 4.17 0 0 1 4.172-4.195m10.71-2.719-3 3a.397.397 0 0 1-.538 0l-1.5-1.5a.397.397 0 0 1 0-.539c.14-.14.398-.14.539 0l1.242 1.242 2.719-2.742c.14-.14.398-.14.539 0 .14.14.14.399 0 .54' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '022456363af4ab6b7f65b6bacf18da1b__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUserCheckCaptionRegularIcon);
exports.default = ForwardRef;
