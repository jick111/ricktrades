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
exports.IllustrativeMarketsIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeMarketsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12 4.667H8A3.335 3.335 0 0 0 4.667 8v4A3.335 3.335 0 0 0 8 15.333h6c.733 0 1.333-.6 1.333-1.333V8A3.335 3.335 0 0 0 12 4.667M8 14c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v6z' }),
        React.createElement("path", { d: 'M11.333 9.333c-.366 0-.666.3-.666.667v1.333c0 .367.3.667.666.667s.667-.3.667-.667V10c0-.367-.3-.667-.667-.667M8.667 8.667c-.367 0-.667.3-.667.666v2c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-2c0-.366-.3-.666-.666-.666M14 16.667H8A3.335 3.335 0 0 0 4.667 20v4A3.335 3.335 0 0 0 8 27.333h4A3.335 3.335 0 0 0 15.333 24v-6c0-.733-.6-1.333-1.333-1.333M14 24c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h6z' }),
        React.createElement("path", { d: 'M11.333 24c.367 0 .667-.3.667-.667v-2.666c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667v2.666c0 .367.3.667.666.667M8 23.333c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-2c0-.366-.3-.666-.666-.666s-.667.3-.667.666zM24 4.667h-4A3.335 3.335 0 0 0 16.667 8v6c0 .733.6 1.333 1.333 1.333h6A3.335 3.335 0 0 0 27.333 12V8A3.335 3.335 0 0 0 24 4.667M26 12c0 1.1-.9 2-2 2h-6V8c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2z' }),
        React.createElement("path", { d: 'M23.333 8c-.366 0-.666.3-.666.667v2.666c0 .367.3.667.666.667s.667-.3.667-.667V8.667C24 8.3 23.7 8 23.333 8M20.667 10c-.367 0-.667.3-.667.667v.666c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-.666c0-.367-.3-.667-.666-.667M24 16.667h-6c-.733 0-1.333.6-1.333 1.333v6A3.335 3.335 0 0 0 20 27.333h4A3.335 3.335 0 0 0 27.333 24v-4A3.334 3.334 0 0 0 24 16.667M26 24c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-6h6c1.1 0 2 .9 2 2z' }),
        React.createElement("path", { d: 'M23.333 22c-.366 0-.666.3-.666.667v.666c0 .367.3.667.666.667s.667-.3.667-.667v-.666c0-.367-.3-.667-.667-.667M20.667 20c-.367 0-.667.3-.667.667v2.666c0 .367.3.667.667.667.366 0 .666-.3.666-.667v-2.666c0-.367-.3-.667-.666-.667' }))));
exports.IllustrativeMarketsIcon = IllustrativeMarketsIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeMarketsIcon);
exports.default = ForwardRef;
