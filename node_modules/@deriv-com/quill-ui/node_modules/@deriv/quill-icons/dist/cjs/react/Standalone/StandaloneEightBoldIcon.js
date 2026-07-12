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
exports.StandaloneEightBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneEightBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M21.625 12.594a4.86 4.86 0 0 1-1.719 3.71 4.78 4.78 0 0 1 2.344 4.102 4.843 4.843 0 0 1-4.844 4.844h-2.812a4.82 4.82 0 0 1-4.844-4.844c0-1.718.898-3.281 2.305-4.101-1.055-.899-1.68-2.227-1.68-3.711a4.843 4.843 0 0 1 4.844-4.844h1.562c2.657 0 4.844 2.188 4.844 4.844m-4.844 4.844h-2.187a2.967 2.967 0 0 0-2.969 2.968 2.967 2.967 0 0 0 2.969 2.969h2.812a2.967 2.967 0 0 0 2.969-2.969 2.967 2.967 0 0 0-2.969-2.968zm0-1.875a2.967 2.967 0 0 0 2.969-2.97 2.967 2.967 0 0 0-2.969-2.968H15.22a2.967 2.967 0 0 0-2.969 2.969 2.967 2.967 0 0 0 2.969 2.969z' })));
exports.StandaloneEightBoldIcon = StandaloneEightBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneEightBoldIcon);
exports.default = ForwardRef;
