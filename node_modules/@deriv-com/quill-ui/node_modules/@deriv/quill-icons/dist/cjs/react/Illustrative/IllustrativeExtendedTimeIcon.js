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
exports.IllustrativeExtendedTimeIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeExtendedTimeIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4 16c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2 .367 0 .667-.3.667-.667s-.3-.667-.667-.667a.67.67 0 0 1-.667-.666v-4c0-.367.3-.667.667-.667M22.553 13.74c-.366 0-.666.3-.666.667 0 .366.3.666.666.666s.667.3.667.667v4c0 .367-.3.667-.667.667-.366 0-.666.3-.666.666s.3.667.666.667c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2M16.94 6.667H9.607c-1.1 0-2 .9-2 2v5.886a3.34 3.34 0 0 0 1.326 2.66l1.9 1.434-1.82 1.293a3.34 3.34 0 0 0-1.406 2.72v6.007c0 1.1.9 2 2 2h7.333c1.1 0 2-.9 2-2v-5.994c0-1.073-.52-2.086-1.393-2.713l-1.834-1.313 1.9-1.434a3.36 3.36 0 0 0 1.327-2.66V8.667c0-1.1-.9-2-2-2M9.86 29.333l2.94-3.013a.67.67 0 0 1 .953 0l2.94 3.013zm7.753-14.78c0 .627-.3 1.22-.793 1.594l-1.9 1.433c-.34.26-.533.653-.527 1.08 0 .427.207.82.56 1.067l1.834 1.313c.52.373.833.98.833 1.627v5.686l-2.9-2.973a1.997 1.997 0 0 0-2.867 0l-2.9 2.973v-5.7c0-.646.314-1.253.84-1.633l1.82-1.293a1.34 1.34 0 0 0 .56-1.067c0-.427-.193-.827-.526-1.08l-1.9-1.433a2 2 0 0 1-.794-1.594V8.667c0-.367.3-.667.667-.667h7.333c.367 0 .667.3.667.667v5.886zM25.667 2a4.333 4.333 0 1 0 0 8.666 4.333 4.333 0 0 0 0-8.666m0 7.333c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.347 3 3-1.347 3-3 3' }),
        React.createElement("path", { d: 'M26.667 5.667h-.334v-.334c0-.366-.3-.666-.666-.666s-.667.3-.667.666v.334h-.333c-.367 0-.667.3-.667.666s.3.667.667.667H25v.333c0 .367.3.667.667.667.366 0 .666-.3.666-.667V7h.334c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666' }))));
exports.IllustrativeExtendedTimeIcon = IllustrativeExtendedTimeIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeExtendedTimeIcon);
exports.default = ForwardRef;
