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
exports.StandaloneCircleTwoFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCircleTwoFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16 26.5c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m-1.328-12.773c.312-.196.625-.313 1.015-.313h.118c.78 0 1.445.664 1.445 1.445 0 .391-.195.782-.469 1.055l-4.258 3.984a.98.98 0 0 0-.234 1.016.99.99 0 0 0 .899.586h5.624c.508 0 .938-.39.938-.937a.95.95 0 0 0-.937-.938H15.53l2.54-2.344c.663-.625 1.015-1.484 1.015-2.422a3.327 3.327 0 0 0-3.242-3.32h-.156a3.54 3.54 0 0 0-2.149.703l-.937.703c-.43.313-.508.938-.196 1.328.313.43.938.508 1.328.196z' })));
exports.StandaloneCircleTwoFillIcon = StandaloneCircleTwoFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCircleTwoFillIcon);
exports.default = ForwardRef;
