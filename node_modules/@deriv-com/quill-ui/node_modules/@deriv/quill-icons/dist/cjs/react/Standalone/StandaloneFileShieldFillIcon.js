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
exports.StandaloneFileShieldFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFileShieldFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M4.75 9c0-1.367 1.094-2.5 2.5-2.5h6.25v5c0 .703.547 1.25 1.25 1.25h5v1.836l-3.633 1.484c-.86.313-1.367 1.133-1.367 2.032 0 2.187.703 5.78 3.672 8.125-.352.195-.781.273-1.172.273h-10a2.47 2.47 0 0 1-2.5-2.5zm15 2.5h-5v-5zm1.523 3.828a.97.97 0 0 1 .665 0l4.687 1.875c.39.156.625.508.625.86 0 2.5-1.016 6.601-5.273 8.398a1.2 1.2 0 0 1-.743 0C16.977 24.664 16 20.563 16 18.063c0-.352.234-.704.586-.86zm4.063 3.36-3.711-1.485v7.344c2.656-1.29 3.555-3.867 3.71-5.86' })));
exports.StandaloneFileShieldFillIcon = StandaloneFileShieldFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFileShieldFillIcon);
exports.default = ForwardRef;
