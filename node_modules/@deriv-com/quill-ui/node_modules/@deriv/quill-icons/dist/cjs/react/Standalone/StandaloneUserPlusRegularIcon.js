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
exports.StandaloneUserPlusRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneUserPlusRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M12.25 7.75c-1.367 0-2.578.742-3.281 1.875-.664 1.172-.664 2.617 0 3.75.703 1.172 1.914 1.875 3.281 1.875 1.328 0 2.54-.703 3.242-1.875.664-1.133.664-2.578 0-3.75-.703-1.133-1.914-1.875-3.242-1.875m0 8.75A4.97 4.97 0 0 1 7.914 14c-.898-1.523-.898-3.437 0-5 .899-1.523 2.54-2.5 4.336-2.5 1.758 0 3.398.977 4.297 2.5.898 1.563.898 3.477 0 5a4.96 4.96 0 0 1-4.297 2.5m-1.797 3.125c-3.125 0-5.664 2.54-5.703 5.625h15c-.078-3.086-2.617-5.625-5.742-5.625zm0-1.25h3.555A6.985 6.985 0 0 1 21 25.367c0 .625-.547 1.133-1.172 1.133H4.633A1.134 1.134 0 0 1 3.5 25.367c0-3.867 3.086-6.992 6.953-6.992m13.047 0V15.25h-3.125a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625H23.5v-3.125c0-.312.273-.625.625-.625.313 0 .625.313.625.625V14h3.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H24.75v3.125a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625' })));
exports.StandaloneUserPlusRegularIcon = StandaloneUserPlusRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneUserPlusRegularIcon);
exports.default = ForwardRef;
