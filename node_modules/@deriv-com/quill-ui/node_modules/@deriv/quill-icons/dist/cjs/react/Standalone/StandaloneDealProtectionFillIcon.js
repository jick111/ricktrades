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
exports.StandaloneDealProtectionFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneDealProtectionFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16.469 10.719h5.586c.547 0 1.093.078 1.562.273s.86.469 1.211.82c.313.391.586.82.781 1.29.157.507.235 1.015.235 1.562 0 .586-.078 1.094-.235 1.602a4.5 4.5 0 0 1-.78 1.25 3.7 3.7 0 0 1-1.212.82 4.1 4.1 0 0 1-1.562.312h-2.07v3.79h-3.516zm5.664 3.32c-.04-.039-.117-.117-.352-.117h-1.797v1.484h1.797c.235 0 .313-.039.352-.078s.117-.117.117-.312v-.664c0-.235-.078-.274-.078-.313zM10.57 10.72c.742 0 1.485.117 2.11.351.664.274 1.25.625 1.718 1.133q.704.762 1.055 1.875c.235.742.352 1.563.352 2.5q0 1.348-.352 2.461-.351 1.113-1.055 1.875a4.3 4.3 0 0 1-1.718 1.133 6 6 0 0 1-2.11.39H6V10.72zm1.172 8.047c.235-.235.39-.625.39-1.407v-1.601c0-.781-.155-1.172-.39-1.406-.234-.235-.586-.391-1.172-.391H9.555v5.195h1.015c.586 0 .938-.156 1.172-.39' })));
exports.StandaloneDealProtectionFillIcon = StandaloneDealProtectionFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneDealProtectionFillIcon);
exports.default = ForwardRef;
