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
exports.StandaloneUserCheckRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneUserCheckRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M12.25 7.75c-1.367 0-2.578.742-3.281 1.875-.664 1.172-.664 2.617 0 3.75.703 1.172 1.914 1.875 3.281 1.875 1.328 0 2.54-.703 3.242-1.875.664-1.133.664-2.578 0-3.75-.703-1.133-1.914-1.875-3.242-1.875m0 8.75A4.97 4.97 0 0 1 7.914 14c-.898-1.523-.898-3.437 0-5 .899-1.523 2.54-2.5 4.336-2.5 1.758 0 3.398.977 4.297 2.5.898 1.563.898 3.477 0 5a4.96 4.96 0 0 1-4.297 2.5m-1.797 3.125c-3.125 0-5.664 2.54-5.703 5.625h15c-.078-3.086-2.617-5.625-5.742-5.625zm0-1.25h3.555A6.985 6.985 0 0 1 21 25.367c0 .625-.547 1.133-1.172 1.133H4.633A1.134 1.134 0 0 1 3.5 25.367c0-3.867 3.086-6.992 6.953-6.992m17.852-4.531-5 5a.66.66 0 0 1-.899 0l-2.5-2.5a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l2.07 2.07 4.531-4.57a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899' })));
exports.StandaloneUserCheckRegularIcon = StandaloneUserCheckRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneUserCheckRegularIcon);
exports.default = ForwardRef;
