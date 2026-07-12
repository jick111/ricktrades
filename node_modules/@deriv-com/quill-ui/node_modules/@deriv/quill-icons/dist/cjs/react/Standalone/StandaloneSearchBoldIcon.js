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
exports.StandaloneSearchBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneSearchBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M20.375 14.625c0-2.227-1.21-4.258-3.125-5.39-1.953-1.133-4.336-1.133-6.25 0-1.953 1.132-3.125 3.163-3.125 5.39A6.22 6.22 0 0 0 11 20.055c1.914 1.133 4.297 1.133 6.25 0 1.914-1.133 3.125-3.164 3.125-5.43m-1.21 6.406a8.2 8.2 0 0 1-5.04 1.719A8.12 8.12 0 0 1 6 14.625C6 10.172 9.633 6.5 14.125 6.5c4.453 0 8.125 3.672 8.125 8.125a8.25 8.25 0 0 1-1.758 5.078l5.235 5.195c.351.391.351.977 0 1.329-.391.39-.977.39-1.329 0z' })));
exports.StandaloneSearchBoldIcon = StandaloneSearchBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneSearchBoldIcon);
exports.default = ForwardRef;
