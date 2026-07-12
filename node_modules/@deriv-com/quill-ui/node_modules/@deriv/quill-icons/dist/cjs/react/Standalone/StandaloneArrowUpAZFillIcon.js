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
exports.StandaloneArrowUpAZFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpAZFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm11.898 8.18 3.438 3.75a1.24 1.24 0 0 1-.078 1.758 1.24 1.24 0 0 1-1.758-.079l-1.25-1.367V24c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V12.242L8.46 13.61a1.24 1.24 0 0 1-1.757.079 1.24 1.24 0 0 1-.078-1.758l3.438-3.75c.234-.274.585-.43.937-.43s.664.156.898.43M17.25 19c0-.664.547-1.25 1.25-1.25h5c.508 0 .938.313 1.133.781a1.26 1.26 0 0 1-.274 1.367l-2.851 2.891H23.5c.664 0 1.25.547 1.25 1.25 0 .664-.586 1.25-1.25 1.25h-5a1.28 1.28 0 0 1-1.172-.781 1.26 1.26 0 0 1 .274-1.367l2.851-2.891H18.5c-.703 0-1.25-.547-1.25-1.25M21 7.75c.469 0 .898.273 1.094.703l2.5 5 .625 1.25a1.24 1.24 0 0 1-.547 1.68 1.24 1.24 0 0 1-1.68-.547l-.273-.586h-3.477l-.273.586a1.24 1.24 0 0 1-1.68.547 1.24 1.24 0 0 1-.547-1.68l.625-1.25 2.5-5c.195-.43.625-.703 1.133-.703m-.82 5.625h1.601L21 11.813z' })));
exports.StandaloneArrowUpAZFillIcon = StandaloneArrowUpAZFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpAZFillIcon);
exports.default = ForwardRef;
