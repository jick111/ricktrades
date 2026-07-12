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
exports.StandaloneArrowRotateRightFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowRotateRightFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm21.078 12.75-.664-.664a6.32 6.32 0 0 0-8.867 0 6.32 6.32 0 0 0 0 8.867 6.32 6.32 0 0 0 8.867 0c.469-.508 1.25-.508 1.758 0 .469.469.469 1.25 0 1.758a8.794 8.794 0 0 1-12.383 0 8.794 8.794 0 0 1 0-12.383 8.794 8.794 0 0 1 12.383 0l.703.703V9c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25v5c0 .703-.586 1.25-1.25 1.25h-5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25z' })));
exports.StandaloneArrowRotateRightFillIcon = StandaloneArrowRotateRightFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowRotateRightFillIcon);
exports.default = ForwardRef;
