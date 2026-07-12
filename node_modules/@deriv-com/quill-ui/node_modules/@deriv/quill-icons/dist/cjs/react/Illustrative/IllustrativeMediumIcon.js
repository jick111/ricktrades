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
exports.IllustrativeMediumIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeMediumIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M24 4.667H8A3.335 3.335 0 0 0 4.667 8v16A3.335 3.335 0 0 0 8 27.333h16A3.335 3.335 0 0 0 27.333 24V8A3.335 3.335 0 0 0 24 4.667M26 24c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2z' }),
        React.createElement("path", { d: 'M19.807 13.427h-7.62c-.367 0-.667.3-.667.666s.3.667.667.667h7.62c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666M19.807 17.24h-7.62c-.367 0-.667.3-.667.667 0 .366.3.666.667.666h7.62c.366 0 .666-.3.666-.666s-.3-.667-.666-.667' }))));
exports.IllustrativeMediumIcon = IllustrativeMediumIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeMediumIcon);
exports.default = ForwardRef;
