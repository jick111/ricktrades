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
exports.StandaloneDesktopRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneDesktopRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M24.75 7.75H7.25C6.547 7.75 6 8.336 6 9v7.5h20V9c0-.664-.586-1.25-1.25-1.25m2.5 8.75v3.75c0 1.406-1.133 2.5-2.5 2.5h-5.86l.43 2.5h2.305c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-11.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625h2.266l.43-2.5H7.25a2.47 2.47 0 0 1-2.5-2.5V9c0-1.367 1.094-2.5 2.5-2.5h17.5c1.367 0 2.5 1.133 2.5 2.5zM6 17.75v2.5c0 .703.547 1.25 1.25 1.25h17.5c.664 0 1.25-.547 1.25-1.25v-2.5zm7.89 7.5h4.18l-.43-2.5h-3.32z' })));
exports.StandaloneDesktopRegularIcon = StandaloneDesktopRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneDesktopRegularIcon);
exports.default = ForwardRef;
