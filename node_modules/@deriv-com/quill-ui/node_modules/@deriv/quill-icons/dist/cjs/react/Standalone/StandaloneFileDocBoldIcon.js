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
exports.StandaloneFileDocBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFileDocBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M8.5 24.625h1.25V26.5H8.5A2.47 2.47 0 0 1 6 24V9c0-1.367 1.094-2.5 2.5-2.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758v5.195h-1.875v-5H16c-.703 0-1.25-.547-1.25-1.25V8.375H8.5A.64.64 0 0 0 7.875 9v15c0 .352.273.625.625.625m4.375-4.375h1.25c1.016 0 1.875.86 1.875 1.875v2.5c0 1.055-.86 1.875-1.875 1.875h-1.25a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625m.625 5h.625a.64.64 0 0 0 .625-.625v-2.5c0-.312-.312-.625-.625-.625H13.5zm10.313-5h.625c.859 0 1.562.703 1.562 1.563v.312a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625v-.312a.336.336 0 0 0-.312-.313h-.625a.31.31 0 0 0-.313.313v3.125c0 .195.117.312.313.312h.625a.31.31 0 0 0 .312-.312v-.313c0-.312.273-.625.625-.625.313 0 .625.313.625.625v.313c0 .898-.703 1.562-1.562 1.562h-.625c-.899 0-1.563-.664-1.563-1.562v-3.125c0-.86.664-1.563 1.563-1.563m-6.563 1.563c0-.86.664-1.563 1.563-1.563h.625c.859 0 1.562.703 1.562 1.563v3.125c0 .898-.703 1.562-1.562 1.562h-.625c-.899 0-1.563-.664-1.563-1.562zm1.563-.313a.31.31 0 0 0-.313.313v3.125c0 .195.117.312.313.312h.625a.31.31 0 0 0 .312-.312v-3.125a.336.336 0 0 0-.312-.313z' })));
exports.StandaloneFileDocBoldIcon = StandaloneFileDocBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFileDocBoldIcon);
exports.default = ForwardRef;
