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
exports.StandaloneBoxArchiveCircleArrowDownFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneBoxArchiveCircleArrowDownFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M3.5 9c0-.664.547-1.25 1.25-1.25h17.5c.664 0 1.25.586 1.25 1.25v1.25c0 .703-.586 1.25-1.25 1.25H4.75c-.703 0-1.25-.547-1.25-1.25zm1.25 3.75h17.5v1.29A6.876 6.876 0 0 0 16 20.874c0 1.68.586 3.203 1.563 4.375H7.25a2.47 2.47 0 0 1-2.5-2.5zm5 3.125c0 .352.273.625.625.625h6.25a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625h-6.25a.64.64 0 0 0-.625.625m7.5 5c0-1.992 1.055-3.867 2.813-4.844 1.718-1.015 3.867-1.015 5.625 0a5.61 5.61 0 0 1 2.812 4.844c0 2.031-1.094 3.867-2.812 4.883-1.758 1.015-3.907 1.015-5.625 0a5.6 5.6 0 0 1-2.813-4.883m2.969-.117a.66.66 0 0 0 0 .898l2.187 2.188a.66.66 0 0 0 .899 0l2.187-2.188a.66.66 0 0 0 0-.898.66.66 0 0 0-.898 0L23.5 21.89v-3.516c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v3.516l-1.133-1.133a.66.66 0 0 0-.898 0' })));
exports.StandaloneBoxArchiveCircleArrowDownFillIcon = StandaloneBoxArchiveCircleArrowDownFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneBoxArchiveCircleArrowDownFillIcon);
exports.default = ForwardRef;
