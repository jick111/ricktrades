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
exports.StandaloneFloppyDiskPenFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFloppyDiskPenFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 7.75h9.453c.664 0 1.328.273 1.797.742l3.008 3.008c.469.469.742 1.133.742 1.797v2.422l-6.21 6.21a2.5 2.5 0 0 0-.665 1.173l-.547 2.148H7.25a2.47 2.47 0 0 1-2.5-2.5v-12.5c0-1.367 1.094-2.5 2.5-2.5m0 3.75V14c0 .703.547 1.25 1.25 1.25H16c.664 0 1.25-.547 1.25-1.25v-2.5c0-.664-.586-1.25-1.25-1.25H8.5c-.703 0-1.25.586-1.25 1.25m6.25 6.25c-.898 0-1.719.508-2.187 1.25-.43.781-.43 1.758 0 2.5a2.54 2.54 0 0 0 2.187 1.25c.86 0 1.68-.469 2.148-1.25.43-.742.43-1.719 0-2.5-.468-.742-1.289-1.25-2.148-1.25m12.695-2.031.586.586c.586.586.586 1.601 0 2.187l-1.172 1.172-2.773-2.773 1.172-1.172c.586-.586 1.601-.586 2.187 0m-9.297 7.11 5.079-5.079 2.773 2.773-5.078 5.079a1.1 1.1 0 0 1-.547.312l-2.383.586c-.195.04-.43 0-.586-.156-.156-.157-.195-.39-.156-.586l.586-2.383c.039-.195.156-.39.312-.547' })));
exports.StandaloneFloppyDiskPenFillIcon = StandaloneFloppyDiskPenFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFloppyDiskPenFillIcon);
exports.default = ForwardRef;
