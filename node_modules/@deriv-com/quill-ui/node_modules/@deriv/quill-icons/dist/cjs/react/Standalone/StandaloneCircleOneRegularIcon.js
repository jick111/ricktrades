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
exports.StandaloneCircleOneRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCircleOneRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M24.75 16.5c0-3.125-1.68-5.977-4.375-7.54-2.734-1.6-6.055-1.6-8.75 0A8.63 8.63 0 0 0 7.25 16.5c0 3.164 1.64 6.016 4.375 7.578 2.695 1.602 6.016 1.602 8.75 0A8.73 8.73 0 0 0 24.75 16.5M6 16.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.313-4.883c.156.117.312.313.312.508v8.125H18.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h1.875v-7.031l-1.29.703c-.273.195-.663.078-.82-.235-.195-.273-.078-.664.235-.82l2.188-1.25a.6.6 0 0 1 .624 0' })));
exports.StandaloneCircleOneRegularIcon = StandaloneCircleOneRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCircleOneRegularIcon);
exports.default = ForwardRef;
