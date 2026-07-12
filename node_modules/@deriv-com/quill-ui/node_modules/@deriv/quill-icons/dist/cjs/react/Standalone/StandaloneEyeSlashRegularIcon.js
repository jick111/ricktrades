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
exports.StandaloneEyeSlashRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneEyeSlashRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm4.477 6.656 23.789 18.75c.234.196.312.625.078.86a.584.584 0 0 1-.86.117L3.734 7.633c-.273-.195-.351-.625-.117-.86.196-.273.625-.351.86-.117m22.656 10.352c-.39.937-1.094 2.226-2.11 3.476l-.976-.78A14.4 14.4 0 0 0 26 16.5c-.547-1.25-1.68-3.125-3.36-4.687S18.735 9 16 9c-1.562 0-2.969.43-4.18 1.055l-1.054-.86C12.25 8.335 13.969 7.75 16 7.75c3.125 0 5.664 1.445 7.5 3.164 1.836 1.68 3.047 3.711 3.633 5.117a1.4 1.4 0 0 1 0 .977M6.938 12.555l.976.78A12.6 12.6 0 0 0 6 16.5c.508 1.25 1.64 3.125 3.32 4.688S13.227 24 16 24c1.523 0 2.93-.39 4.14-1.016l1.055.86A10.1 10.1 0 0 1 16 25.25c-3.164 0-5.703-1.406-7.54-3.125-1.835-1.719-3.046-3.75-3.632-5.117a1.4 1.4 0 0 1 0-.977c.39-.937 1.094-2.226 2.11-3.476M16 21.5c-2.773 0-5-2.227-5-5 0-.234 0-.469.04-.703l1.21.937A3.73 3.73 0 0 0 16 20.25c.195 0 .43 0 .625-.04l1.21.938A5 5 0 0 1 16 21.5m5-5v.04c0 .233-.04.468-.078.702l-1.211-.937c-.117-1.992-1.719-3.516-3.711-3.516-.234 0-.469 0-.664.04l-1.211-.938c.586-.235 1.21-.391 1.875-.391 2.734 0 5 2.266 5 5' })));
exports.StandaloneEyeSlashRegularIcon = StandaloneEyeSlashRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneEyeSlashRegularIcon);
exports.default = ForwardRef;
