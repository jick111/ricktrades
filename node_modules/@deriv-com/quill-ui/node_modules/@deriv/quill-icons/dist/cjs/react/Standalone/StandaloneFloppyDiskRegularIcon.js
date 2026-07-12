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
exports.StandaloneFloppyDiskRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFloppyDiskRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M8.5 10.25v12.5c0 .703.547 1.25 1.25 1.25h12.5c.664 0 1.25-.547 1.25-1.25v-9.57c0-.352-.156-.664-.39-.899l-2.891-2.89c-.157-.157-.313-.235-.469-.313v3.672c0 .703-.586 1.25-1.25 1.25H11c-.703 0-1.25-.547-1.25-1.25V9c-.703 0-1.25.586-1.25 1.25M11 9v3.75h7.5V9zm-3.75 1.25c0-1.367 1.094-2.5 2.5-2.5h9.57c.664 0 1.29.273 1.758.742l2.93 2.93c.469.469.742 1.094.742 1.758v9.57c0 1.406-1.133 2.5-2.5 2.5H9.75a2.47 2.47 0 0 1-2.5-2.5zM17.875 19c0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.875 0-.586.352-.938.938-.938 1.602 0 .703.352 1.29.938 1.64.546.352 1.289.352 1.874 0 .547-.35.938-.937.938-1.64M16 15.875c1.094 0 2.11.625 2.695 1.563.547.976.547 2.187 0 3.125-.586.976-1.601 1.562-2.695 1.562a3.16 3.16 0 0 1-2.734-1.562c-.547-.938-.547-2.149 0-3.125.586-.938 1.601-1.563 2.734-1.563' })));
exports.StandaloneFloppyDiskRegularIcon = StandaloneFloppyDiskRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFloppyDiskRegularIcon);
exports.default = ForwardRef;
