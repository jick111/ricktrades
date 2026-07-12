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
exports.StandaloneCircleEnvelopeBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCircleEnvelopeBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16 8.375c-2.93 0-5.586 1.563-7.07 4.063-1.446 2.539-1.446 5.624 0 8.124A8.13 8.13 0 0 0 16 24.626c2.89 0 5.547-1.523 7.031-4.062 1.446-2.5 1.446-5.586 0-8.125-1.484-2.5-4.14-4.063-7.031-4.063M16 26.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m-.312-10L11 13.922a1.244 1.244 0 0 1 1.25-1.172h7.5c.625 0 1.172.508 1.21 1.172L16.274 16.5a.7.7 0 0 1-.273.078.7.7 0 0 1-.312-.078m1.171 1.094L21 15.328V19c0 .703-.586 1.25-1.25 1.25h-7.5c-.703 0-1.25-.547-1.25-1.25v-3.672l4.102 2.266c.273.156.585.234.898.234.273 0 .586-.078.86-.234' })));
exports.StandaloneCircleEnvelopeBoldIcon = StandaloneCircleEnvelopeBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCircleEnvelopeBoldIcon);
exports.default = ForwardRef;
