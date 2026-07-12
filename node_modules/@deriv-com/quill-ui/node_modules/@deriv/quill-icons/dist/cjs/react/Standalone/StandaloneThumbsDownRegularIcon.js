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
exports.StandaloneThumbsDownRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneThumbsDownRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M17.25 23.336a.98.98 0 0 0 1.172.664.98.98 0 0 0 .664-1.172l-.195-.625a7.2 7.2 0 0 0-.977-2.226.6.6 0 0 1 0-.625.59.59 0 0 1 .547-.352H23.5c.664 0 1.25-.547 1.25-1.25 0-.43-.234-.82-.586-1.055-.273-.156-.39-.547-.234-.82.117-.195.195-.39.195-.625 0-.469-.273-.898-.703-1.094a.6.6 0 0 1-.313-.43.6.6 0 0 1 .118-.507c.156-.235.273-.469.273-.781 0-.547-.39-1.016-.86-1.172-.312-.118-.507-.43-.43-.743 0-.078.04-.156.04-.273C22.25 9.586 21.664 9 21 9h-3.516c-.625 0-1.21.195-1.718.547l-1.524 1.015a3 3 0 0 0-.86.86c-.194.312-.585.39-.859.195-.312-.195-.39-.586-.195-.86a4.1 4.1 0 0 1 1.211-1.25l1.524-1.015a4.4 4.4 0 0 1 2.421-.742H21c1.367 0 2.5 1.133 2.5 2.5v.04c.742.429 1.25 1.25 1.25 2.148 0 .351-.078.703-.195.976.468.469.82 1.133.82 1.836 0 .273-.04.508-.117.742.43.469.742 1.094.742 1.758 0 1.406-1.133 2.5-2.5 2.5h-3.984c.234.547.43 1.055.586 1.602l.195.664c.312 1.172-.39 2.343-1.563 2.695-1.172.312-2.343-.39-2.695-1.563l-.156-.625a5.35 5.35 0 0 0-2.266-3.085l-.117-.079.313-.507-.313.507a4.5 4.5 0 0 1-1.172-1.093.665.665 0 0 1 .156-.899.624.624 0 0 1 .86.156c.234.313.508.586.82.782l.117.078a6.55 6.55 0 0 1 2.813 3.789zm-10-3.086h2.5V11.5h-2.5zm-1.25 0V11.5c0-.664.547-1.25 1.25-1.25h2.5c.664 0 1.25.586 1.25 1.25v8.75c0 .703-.586 1.25-1.25 1.25h-2.5c-.703 0-1.25-.547-1.25-1.25' })));
exports.StandaloneThumbsDownRegularIcon = StandaloneThumbsDownRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneThumbsDownRegularIcon);
exports.default = ForwardRef;
