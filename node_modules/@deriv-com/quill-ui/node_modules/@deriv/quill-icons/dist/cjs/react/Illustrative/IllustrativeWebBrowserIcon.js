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
exports.IllustrativeWebBrowserIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeWebBrowserIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M27.387 7.333H4.627a2.8 2.8 0 0 0-2.8 2.8V23.64a2.8 2.8 0 0 0 2.8 2.8h10.706v2.227H12.44a.66.66 0 0 0-.667.666.66.66 0 0 0 .667.667h7.12a.66.66 0 0 0 .667-.667.66.66 0 0 0-.667-.666h-2.893V26.44h10.72a2.8 2.8 0 0 0 2.8-2.8V10.133a2.8 2.8 0 0 0-2.8-2.8M4.627 8.667h22.76c.813 0 1.466.653 1.466 1.466V11.6H3.16v-1.467c0-.813.653-1.466 1.467-1.466m22.76 16.44H4.627A1.46 1.46 0 0 1 3.16 23.64V12.933h25.693V23.64c0 .813-.653 1.467-1.466 1.467m-.72-3.467h-.52l1 1a.66.66 0 0 1 0 .947.67.67 0 0 1-.467.2.65.65 0 0 1-.467-.2l-1-1v.52a.66.66 0 0 1-.666.666.66.66 0 0 1-.667-.666v-2.134c0-.093.013-.173.053-.253.04-.107.12-.2.214-.267.026-.013.04-.026.066-.04a.7.7 0 0 1 .334-.106h2.133a.66.66 0 0 1 .667.666.66.66 0 0 1-.667.667zm-1.907-2.8v-.707a.66.66 0 0 1 .667-.666.66.66 0 0 1 .666.666v.707a.66.66 0 0 1-.666.667.66.66 0 0 1-.667-.667m-1 1.187a.67.67 0 0 1-.467.2.65.65 0 0 1-.466-.2l-.707-.707a.66.66 0 0 1 0-.947.66.66 0 0 1 .947 0l.706.707a.66.66 0 0 1 0 .947zm-.52 1.666a.66.66 0 0 1-.667.667h-.706a.66.66 0 0 1-.667-.667.66.66 0 0 1 .667-.666h.706a.66.66 0 0 1 .667.666M8 10.133c0-.293.24-.533.533-.533s.534.24.534.533-.24.534-.534.534A.535.535 0 0 1 8 10.133m-1.6 0c0-.293.24-.533.533-.533s.534.24.534.533-.24.534-.534.534a.535.535 0 0 1-.533-.534m-1.6 0c0-.293.24-.533.533-.533s.534.24.534.533-.24.534-.534.534a.535.535 0 0 1-.533-.534' })));
exports.IllustrativeWebBrowserIcon = IllustrativeWebBrowserIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeWebBrowserIcon);
exports.default = ForwardRef;
