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
exports.StandaloneCircleArrowUpRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCircleArrowUpRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M16 7.75a8.73 8.73 0 0 0-7.578 4.375c-1.602 2.734-1.602 6.055 0 8.75C9.984 23.609 12.836 25.25 16 25.25a8.63 8.63 0 0 0 7.54-4.375c1.6-2.695 1.6-6.016 0-8.75C21.976 9.43 19.124 7.75 16 7.75m0 18.75c-3.594 0-6.875-1.875-8.672-5-1.797-3.086-1.797-6.875 0-10 1.797-3.086 5.078-5 8.672-5 3.555 0 6.836 1.914 8.633 5 1.797 3.125 1.797 6.914 0 10a9.93 9.93 0 0 1-8.633 5m4.18-11.055a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-2.656-2.696v7.227A.64.64 0 0 1 16 21.5a.617.617 0 0 1-.625-.625v-7.227l-2.695 2.696a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l3.75-3.75a.66.66 0 0 1 .899 0z' })));
exports.StandaloneCircleArrowUpRegularIcon = StandaloneCircleArrowUpRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCircleArrowUpRegularIcon);
exports.default = ForwardRef;
