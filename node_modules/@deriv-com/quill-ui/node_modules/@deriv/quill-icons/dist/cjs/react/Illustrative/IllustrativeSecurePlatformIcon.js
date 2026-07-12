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
exports.IllustrativeSecurePlatformIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeSecurePlatformIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.667 25.868h-4c-.367 0-.667.3-.667.667s.3.667.667.667h4c.366 0 .666-.3.666-.667s-.3-.667-.666-.667M30 10.668c-.367 0-.667.3-.667.667v8.667c0 1.1-.9 2-2 2H14c-.367 0-.667.3-.667.666s.3.667.667.667h2.667v2H14c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h6.667c.366 0 .666-.3.666-.666s-.3-.667-.666-.667H18v-2h9.333a3.335 3.335 0 0 0 3.334-3.333v-8.667c0-.367-.3-.667-.667-.667M4.667 11.335c.366 0 .666-.3.666-.667v-2c0-1.1.9-2 2-2h14c.367 0 .667-.3.667-.666s-.3-.667-.667-.667h-14A3.335 3.335 0 0 0 4 8.668v2c0 .367.3.667.667.667' }),
        React.createElement("path", { d: 'M9.333 12.668H4a2.666 2.666 0 0 0-2.667 2.667v12A2.666 2.666 0 0 0 4 30.002h5.333A2.666 2.666 0 0 0 12 27.335v-12a2.666 2.666 0 0 0-2.667-2.667m1.334 14.667c0 .733-.6 1.333-1.334 1.333H4c-.733 0-1.333-.6-1.333-1.333v-12c0-.733.6-1.333 1.333-1.333h5.333c.734 0 1.334.6 1.334 1.333zM30 2.002c-.387 0-1.667-.367-2.453-.634a.65.65 0 0 0-.42 0c-.787.26-2.074.634-2.454.634a.66.66 0 0 0-.666.666v4c0 1.66 2.526 3.007 3.033 3.26a.67.67 0 0 0 .567.02c.033-.013 3.066-1.353 3.066-3.28v-4c0-.366-.3-.666-.666-.666zm-.667 4.666c0 .66-1.246 1.527-1.986 1.92-.92-.52-2.014-1.38-2.014-1.92v-3.42c.694-.14 1.567-.406 2-.546.434.14 1.307.413 2 .546z' }))));
exports.IllustrativeSecurePlatformIcon = IllustrativeSecurePlatformIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeSecurePlatformIcon);
exports.default = ForwardRef;
