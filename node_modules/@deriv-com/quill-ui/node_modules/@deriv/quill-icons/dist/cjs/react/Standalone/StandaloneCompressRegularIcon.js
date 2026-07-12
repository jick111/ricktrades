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
exports.StandaloneCompressRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCompressRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M13.5 8.375v5a.64.64 0 0 1-.625.625h-5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h4.375V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625M7.875 19h5c.313 0 .625.313.625.625v5a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V20.25H7.875a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625M19.75 8.375v4.375h4.375c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625.313 0 .625.313.625.625M19.125 19h5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H19.75v4.375a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625' })));
exports.StandaloneCompressRegularIcon = StandaloneCompressRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCompressRegularIcon);
exports.default = ForwardRef;
