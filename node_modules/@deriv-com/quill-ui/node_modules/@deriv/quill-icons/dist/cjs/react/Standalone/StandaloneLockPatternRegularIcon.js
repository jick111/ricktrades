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
exports.StandaloneLockPatternRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLockPatternRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M6.625 9c0-1.016.82-1.875 1.875-1.875.781 0 1.484.547 1.758 1.25h3.945c.274-.703.977-1.25 1.797-1.25.781 0 1.484.547 1.758 1.25h3.945c.274-.703.977-1.25 1.797-1.25 1.016 0 1.875.86 1.875 1.875 0 1.055-.86 1.875-1.875 1.875-.312 0-.586-.04-.82-.156l-5 5c.117.234.195.508.195.781 0 1.055-.86 1.875-1.875 1.875-.312 0-.586-.04-.82-.156l-5 5c.039.039.039.117.078.156h3.945c.274-.703.977-1.25 1.797-1.25.781 0 1.484.547 1.758 1.25h3.945c.274-.703.977-1.25 1.797-1.25 1.016 0 1.875.86 1.875 1.875 0 1.055-.86 1.875-1.875 1.875-.82 0-1.523-.508-1.797-1.25h-3.945c-.274.742-.977 1.25-1.758 1.25-.82 0-1.523-.508-1.797-1.25h-3.945a1.91 1.91 0 0 1-1.797 1.25A1.875 1.875 0 0 1 6.586 24c0-1.016.86-1.875 1.875-1.875.312 0 .586.078.82.195l5-5a1.8 1.8 0 0 1-.195-.82c0-1.016.86-1.875 1.875-1.875.312 0 .586.078.82.195l5-5c-.039-.039-.039-.117-.078-.195h-3.945c-.274.742-.977 1.25-1.758 1.25-.82 0-1.523-.508-1.797-1.25h-3.945c-.274.742-.977 1.25-1.758 1.25A1.85 1.85 0 0 1 6.625 9m0 7.5c0 .703.352 1.29.938 1.64.546.352 1.289.352 1.875 0 .546-.35.937-.937.937-1.64 0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.876 0-.585.352-.937.938-.937 1.602m15 0c0 .703.352 1.29.938 1.64.546.352 1.289.352 1.875 0 .546-.35.937-.937.937-1.64 0-.664-.39-1.25-.937-1.602-.586-.351-1.329-.351-1.875 0-.586.352-.938.938-.938 1.602' })));
exports.StandaloneLockPatternRegularIcon = StandaloneLockPatternRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLockPatternRegularIcon);
exports.default = ForwardRef;
