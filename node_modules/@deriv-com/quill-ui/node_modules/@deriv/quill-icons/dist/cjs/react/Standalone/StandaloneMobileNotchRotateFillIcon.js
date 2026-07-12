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
exports.StandaloneMobileNotchRotateFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneMobileNotchRotateFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M5.375 9.625A3.11 3.11 0 0 1 8.5 6.5H16a3.134 3.134 0 0 1 3.125 3.125v4.844c-.195.078-.39.195-.586.273-.39-.43-.977-.742-1.602-.742-.117 0-.234.04-.312.04V9.624c0-.312-.312-.625-.625-.625h-1.25v.625a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625V9H8.5a.64.64 0 0 0-.625.625v13.75c0 .352.273.625.625.625h6.992c.43.86 1.055 1.64 1.797 2.227-.39.195-.86.273-1.328.273H8.5c-1.758 0-3.125-1.367-3.125-3.125zm4.375 12.5c0-.312.273-.625.625-.625h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.75a.617.617 0 0 1-.625-.625M16 16.188c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v.507a5.53 5.53 0 0 1 3.75-1.445c2.305 0 4.258 1.406 5.156 3.398a.935.935 0 0 1-.508 1.211c-.468.235-1.015 0-1.21-.468-.586-1.328-1.915-2.266-3.438-2.266-1.133 0-2.11.508-2.812 1.25h1.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-3.125c-.547 0-.938-.39-.938-.937zm.469 6.953c-.235-.47 0-1.016.468-1.25.47-.196 1.016.039 1.25.507.547 1.329 1.875 2.227 3.438 2.227 1.094 0 2.11-.469 2.773-1.25h-1.21c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.125a.95.95 0 0 1 .937.938v3.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-.47a5.65 5.65 0 0 1-3.75 1.407c-2.344 0-4.297-1.367-5.156-3.36' })));
exports.StandaloneMobileNotchRotateFillIcon = StandaloneMobileNotchRotateFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneMobileNotchRotateFillIcon);
exports.default = ForwardRef;
