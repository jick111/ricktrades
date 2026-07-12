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
exports.StandaloneArrowUpAZRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowUpAZRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm11.43 7.945 3.75 3.75a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0l-2.656-2.696v14.727a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V9.898L7.68 12.594a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l3.75-3.75a.66.66 0 0 1 .899 0m7.07 9.805h5c.234 0 .43.156.547.39a.53.53 0 0 1-.078.626L19.789 24H23.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5q-.41 0-.586-.352c-.117-.195-.078-.468.078-.664L22.172 19H18.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m2.5-10c.234 0 .43.156.547.352l2.5 5v.039l.625 1.21a.64.64 0 0 1-.274.86.64.64 0 0 1-.859-.274L23.11 14h-4.257l-.43.938a.64.64 0 0 1-.86.273c-.273-.156-.43-.547-.273-.86l.625-1.21v-.04l2.5-5c.117-.195.313-.351.586-.351m-1.523 5h3.007L21 9.781z' })));
exports.StandaloneArrowUpAZRegularIcon = StandaloneArrowUpAZRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowUpAZRegularIcon);
exports.default = ForwardRef;
