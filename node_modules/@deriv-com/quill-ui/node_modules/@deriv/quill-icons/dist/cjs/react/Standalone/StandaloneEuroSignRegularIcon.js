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
exports.StandaloneEuroSignRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneEuroSignRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11.078 15.25h-.703a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.977c1.054-3.594 4.414-6.25 8.398-6.25h1.914c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H19.75c-3.281 0-6.055 2.11-7.11 5h7.735c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-8.047c-.078.43-.078.86-.078 1.25 0 .43.04.86.078 1.25h8.047c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-7.734a7.54 7.54 0 0 0 7.109 5h1.914c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H19.75c-3.984 0-7.344-2.617-8.398-6.25h-.977a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h.703C11 17.36 11 16.93 11 16.5c0-.39 0-.82.078-1.25' })));
exports.StandaloneEuroSignRegularIcon = StandaloneEuroSignRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneEuroSignRegularIcon);
exports.default = ForwardRef;
