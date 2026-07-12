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
exports.StandaloneCircleEuroBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCircleEuroBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M24.125 16.5c0-2.89-1.562-5.547-4.062-7.031-2.54-1.446-5.625-1.446-8.125 0-2.54 1.484-4.063 4.14-4.063 7.031a8.13 8.13 0 0 0 4.063 7.07c2.5 1.446 5.585 1.446 8.124 0 2.5-1.484 4.063-4.14 4.063-7.07M6 16.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m5 .625h.625c-.04-.195-.04-.39-.04-.586s0-.43.04-.664H11a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.938c.742-1.797 2.578-3.125 4.648-3.125h1.64a.95.95 0 0 1 .938.938c0 .546-.43.937-.937.937h-1.641c-1.016 0-1.914.508-2.5 1.25h3.164c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H13.5c-.04.234-.04.43-.04.664 0 .195 0 .43.04.586h3.75c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.203c.586.82 1.484 1.328 2.539 1.328h1.64a.95.95 0 0 1 .938.938.95.95 0 0 1-.937.937h-1.641a4.97 4.97 0 0 1-4.648-3.203H11a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625' })));
exports.StandaloneCircleEuroBoldIcon = StandaloneCircleEuroBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCircleEuroBoldIcon);
exports.default = ForwardRef;
