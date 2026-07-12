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
exports.IllustrativeSafetyIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeSafetyIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12 18.667c1.653 0 3-1.347 3-3s-1.347-3-3-3-3 1.346-3 3 1.347 3 3 3M12 14a1.667 1.667 0 1 1-.001 3.334A1.667 1.667 0 0 1 12 14M14 19.333c-.367 0-.667.3-.667.667s.3.667.667.667c.733 0 1.333.6 1.333 1.333v1.333c0 .367-.3.667-.666.667H9.333a.67.67 0 0 1-.666-.667V22c0-.733.6-1.333 1.333-1.333.367 0 .667-.3.667-.667s-.3-.667-.667-.667A2.666 2.666 0 0 0 7.333 22v1.333c0 1.1.9 2 2 2h5.334c1.1 0 2-.9 2-2V22A2.666 2.666 0 0 0 14 19.333' }),
        React.createElement("path", { d: 'M20.48 9.56c-1.867-.453-6.4-1.64-8.107-2.78a.68.68 0 0 0-.74 0c-1.706 1.14-6.24 2.327-8.106 2.78C2.627 9.78 2 10.58 2 11.5v9.053c0 8.247 9.793 9.974 9.893 9.994.034 0 .074.006.107.006s.073 0 .107-.006c.1-.014 9.893-1.747 9.893-9.994V11.5c0-.927-.627-1.727-1.52-1.94m.187 11c0 2.96-1.447 5.313-4.307 6.987-1.927 1.133-3.887 1.573-4.36 1.666-1.013-.2-8.667-1.96-8.667-8.653v-9.053c0-.307.207-.574.507-.647 2.253-.553 6.18-1.613 8.16-2.74 1.98 1.127 5.907 2.187 8.16 2.74.3.073.507.34.507.647zM26.333 1.333a4.333 4.333 0 1 0 0 8.667 4.333 4.333 0 0 0 0-8.667m0 7.334c-1.653 0-3-1.347-3-3s1.347-3 3-3 3 1.346 3 3-1.346 3-3 3' }),
        React.createElement("path", { d: 'm26.86 4.86-.86.86-.193-.193a.664.664 0 1 0-.94.94l.666.666c.134.134.3.194.474.194.173 0 .34-.067.473-.194L27.813 5.8a.664.664 0 1 0-.94-.94z' }))));
exports.IllustrativeSafetyIcon = IllustrativeSafetyIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeSafetyIcon);
exports.default = ForwardRef;
