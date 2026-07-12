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
exports.StandaloneMobileNotchRotateRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneMobileNotchRotateRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M6 9c0-1.367 1.094-2.5 2.5-2.5H16c1.367 0 2.5 1.133 2.5 2.5v5.781c-.117.04-.195.078-.273.117a2.13 2.13 0 0 0-.977-.78V9c0-.664-.586-1.25-1.25-1.25h-1.25v.625c0 .703-.586 1.25-1.25 1.25H11c-.703 0-1.25-.547-1.25-1.25V7.75H8.5c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25h7.773c.274.313.586.664.938.938a2.6 2.6 0 0 1-1.25.312H8.5A2.47 2.47 0 0 1 6 24zm5-1.25v.625h2.5V7.75zm5 8.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625v1.484a5.52 5.52 0 0 1 4.375-2.109c2.344 0 4.375 1.484 5.195 3.516.117.351-.039.703-.351.82-.313.156-.664 0-.82-.352a4.31 4.31 0 0 0-4.024-2.734 4.37 4.37 0 0 0-3.594 1.875h1.719c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-3.125A.617.617 0 0 1 16 19zm.39 7.11a.607.607 0 0 1 .352-.782c.313-.156.664 0 .82.313.625 1.64 2.227 2.734 4.063 2.734a4.3 4.3 0 0 0 3.555-1.875H23.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.125c.313 0 .625.313.625.625v3.125a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V24.43a5.6 5.6 0 0 1-4.375 2.07c-2.383 0-4.414-1.445-5.234-3.516' })));
exports.StandaloneMobileNotchRotateRegularIcon = StandaloneMobileNotchRotateRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneMobileNotchRotateRegularIcon);
exports.default = ForwardRef;
