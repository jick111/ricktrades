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
exports.StandaloneEllipsisBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneEllipsisBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M24.125 16.5c0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.875 0a1.87 1.87 0 0 1-.938-1.64c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.875 0 .546.352.937.938.937 1.602m-6.25 0c0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.875 0a1.87 1.87 0 0 1-.938-1.64c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.874 0 .547.352.938.938.938 1.602M9.75 18.375a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.875.35-.547.937-.938 1.64-.938.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.874-.352.586-.938.938-1.602.938' })));
exports.StandaloneEllipsisBoldIcon = StandaloneEllipsisBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneEllipsisBoldIcon);
exports.default = ForwardRef;
