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
exports.StandaloneEuroSignFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneEuroSignFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11.625 15.875H11c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h1.094c1.133-3.242 4.297-5.625 7.969-5.625H21c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.937a5.96 5.96 0 0 0-5.235 3.125h4.922c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-5.625v1.25h5.625c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-4.922c.977 1.875 2.969 3.125 5.235 3.125H21c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.937c-3.672 0-6.836-2.344-7.97-5.625H11c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h.625v-1.25' })));
exports.StandaloneEuroSignFillIcon = StandaloneEuroSignFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneEuroSignFillIcon);
exports.default = ForwardRef;
