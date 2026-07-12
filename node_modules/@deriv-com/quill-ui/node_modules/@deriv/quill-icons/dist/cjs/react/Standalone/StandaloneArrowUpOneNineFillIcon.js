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
exports.StandaloneArrowUpOneNineFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpOneNineFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M22.328 7.984c.352.235.547.625.547 1.016v3.75h.625c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-3.75c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h.625v-1.992l-.234.078c-.664.195-1.368-.156-1.602-.781-.195-.664.156-1.367.781-1.602l1.875-.625c.39-.117.82-.039 1.133.195zM11 7.75c.352 0 .664.156.898.43l3.438 3.75a1.24 1.24 0 0 1-.078 1.758 1.24 1.24 0 0 1-1.758-.079l-1.25-1.367V24c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V12.242L8.46 13.61a1.24 1.24 0 0 1-1.757.079 1.24 1.24 0 0 1-.078-1.758l3.438-3.75c.234-.274.585-.43.937-.43m11.133 13.008a1.2 1.2 0 0 0 .586-1.64c-.274-.626-1.016-.9-1.64-.626-.626.313-.9 1.055-.587 1.68a1.2 1.2 0 0 0 1.64.586m-1.563 2.148c-1.406-.43-2.383-1.718-2.383-3.281a3.443 3.443 0 0 1 3.438-3.437c1.875 0 3.438 1.562 3.438 3.437 0 .938-.313 1.836-.86 2.578l-1.914 2.54c-.39.585-1.172.702-1.758.273-.547-.391-.664-1.172-.234-1.758z' })));
exports.StandaloneArrowUpOneNineFillIcon = StandaloneArrowUpOneNineFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpOneNineFillIcon);
exports.default = ForwardRef;
