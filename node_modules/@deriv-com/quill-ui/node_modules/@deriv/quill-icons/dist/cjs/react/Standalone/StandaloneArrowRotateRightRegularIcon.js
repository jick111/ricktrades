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
exports.StandaloneArrowRotateRightRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneArrowRotateRightRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M24.125 14h-5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h3.36A7.5 7.5 0 0 0 16 9c-4.14 0-7.5 3.36-7.5 7.5S11.86 24 16 24a7.55 7.55 0 0 0 6.29-3.398c.116-.196.35-.352.585-.352.469 0 .781.508.508.938-1.524 2.46-4.297 4.062-7.383 4.062a8.736 8.736 0 0 1-8.75-8.75c0-4.805 3.906-8.75 8.75-8.75 3.164 0 5.938 1.719 7.5 4.258V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625v5a.64.64 0 0 1-.625.625' })));
exports.StandaloneArrowRotateRightRegularIcon = StandaloneArrowRotateRightRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneArrowRotateRightRegularIcon);
exports.default = ForwardRef;
