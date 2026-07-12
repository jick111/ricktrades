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
exports.StandaloneMagnifyingGlassMinusBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneMagnifyingGlassMinusBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M14.125 8.375c-2.266 0-4.297 1.21-5.43 3.125-1.133 1.953-1.133 4.336 0 6.25a6.22 6.22 0 0 0 5.43 3.125c2.227 0 4.258-1.172 5.39-3.125 1.133-1.914 1.133-4.297 0-6.25-1.132-1.914-3.163-3.125-5.39-3.125m0 14.375A8.12 8.12 0 0 1 6 14.625C6 10.172 9.633 6.5 14.125 6.5c4.453 0 8.125 3.672 8.125 8.125a8.25 8.25 0 0 1-1.758 5.078l5.195 5.235c.391.351.391.937 0 1.289a.856.856 0 0 1-1.289 0l-5.234-5.196a8.2 8.2 0 0 1-5.039 1.719m-2.812-9.062h5.624a.95.95 0 0 1 .938.937c0 .547-.43.938-.937.938h-5.625c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937' })));
exports.StandaloneMagnifyingGlassMinusBoldIcon = StandaloneMagnifyingGlassMinusBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneMagnifyingGlassMinusBoldIcon);
exports.default = ForwardRef;
