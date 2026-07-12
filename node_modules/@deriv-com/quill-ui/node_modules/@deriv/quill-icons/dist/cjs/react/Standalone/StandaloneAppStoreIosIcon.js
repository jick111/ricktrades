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
exports.StandaloneAppStoreIosIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneAppStoreIosIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M22.875 7.75c1.016 0 1.875.86 1.875 1.875v13.75c0 1.055-.86 1.875-1.875 1.875H9.125a1.85 1.85 0 0 1-1.875-1.875V9.625c0-1.016.82-1.875 1.875-1.875zM12.211 21.54l.742-1.29c-.39-.508-.937-.664-1.562-.469l-.547.977c-.235.351-.078.86.273 1.055.39.234.86.117 1.094-.274m5.39-2.11c.352-.625-.078-1.563-.859-1.563H14.32l3.32-5.82c.235-.352.118-.82-.273-1.055-.351-.195-.86-.078-1.055.274l-.351.625-.352-.625c-.195-.352-.703-.47-1.054-.274-.39.235-.508.703-.313 1.055l.82 1.406-2.539 4.414h-1.992a.784.784 0 0 0-.781.781c0 .43.352.782.781.782zm3.868 0c.43 0 .781-.352.781-.782a.784.784 0 0 0-.781-.78h-2.032c-1.054-1.759-1.796-3.087-2.304-3.985-.469.39-.938 1.523-.274 2.656.625 1.094 1.602 2.773 2.891 5a.757.757 0 0 0 1.055.273.757.757 0 0 0 .273-1.054l-.742-1.328z' })));
exports.StandaloneAppStoreIosIcon = StandaloneAppStoreIosIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneAppStoreIosIcon);
exports.default = ForwardRef;
