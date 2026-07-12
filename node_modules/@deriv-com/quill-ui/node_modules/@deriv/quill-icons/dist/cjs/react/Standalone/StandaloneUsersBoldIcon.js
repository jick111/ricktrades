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
exports.StandaloneUsersBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneUsersBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M9.125 12.75a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.126C6.977 7.126 7.992 6.5 9.125 6.5c1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.124-.586.977-1.601 1.563-2.695 1.563m14.375 0a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.126.586-.937 1.601-1.562 2.734-1.562 1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.124-.586.977-1.601 1.563-2.695 1.563m-20 5.43C3.5 15.875 5.336 14 7.64 14h1.68c.625 0 1.211.156 1.758.39-.078.274-.078.587-.078.86 0 1.523.625 2.852 1.68 3.75H4.32a.8.8 0 0 1-.82-.82m15.82.82h-.039A4.88 4.88 0 0 0 21 15.25a6 6 0 0 0-.078-.86A4.1 4.1 0 0 1 22.64 14h1.68a4.184 4.184 0 0 1 4.179 4.18c0 .468-.39.82-.86.82zM16 13.375c-.703 0-1.29.39-1.64.938-.352.585-.352 1.328 0 1.874a1.87 1.87 0 0 0 1.64.938c.664 0 1.25-.352 1.602-.937.351-.547.351-1.29 0-1.875-.352-.547-.938-.938-1.602-.938M16 19c-1.367 0-2.578-.703-3.281-1.875-.664-1.133-.664-2.578 0-3.75.703-1.133 1.914-1.875 3.281-1.875 1.328 0 2.54.742 3.242 1.875.664 1.172.664 2.617 0 3.75C18.54 18.297 17.328 19 16 19m-2.305 3.125c-1.562 0-2.851 1.094-3.242 2.5h11.055c-.39-1.406-1.68-2.5-3.242-2.5zm0-1.875h4.57a5.235 5.235 0 0 1 5.235 5.234c0 .586-.469 1.016-1.055 1.016H9.515A1.01 1.01 0 0 1 8.5 25.484c0-2.89 2.305-5.234 5.195-5.234' })));
exports.StandaloneUsersBoldIcon = StandaloneUsersBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneUsersBoldIcon);
exports.default = ForwardRef;
