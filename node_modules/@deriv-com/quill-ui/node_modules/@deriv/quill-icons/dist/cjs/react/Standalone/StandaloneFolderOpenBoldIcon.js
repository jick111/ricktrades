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
exports.StandaloneFolderOpenBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFolderOpenBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M19.75 25.25H7.25a2.47 2.47 0 0 1-2.5-2.5v-12.5c0-1.367 1.094-2.5 2.5-2.5h4.57c.664 0 1.29.273 1.758.742l1.055 1.055c.469.469 1.094.703 1.758.703H21c1.367 0 2.5 1.133 2.5 2.5V14h-1.875v-1.25c0-.312-.312-.625-.625-.625h-4.61c-1.171 0-2.265-.43-3.085-1.25L12.25 9.82a.63.63 0 0 0-.43-.195H7.25a.64.64 0 0 0-.625.625v10.234l2.656-4.609c.235-.39.625-.625 1.094-.625H26c.43 0 .86.234 1.055.625.234.39.234.898 0 1.29l-4.375 7.5a1.28 1.28 0 0 1-1.055.585z' })));
exports.StandaloneFolderOpenBoldIcon = StandaloneFolderOpenBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFolderOpenBoldIcon);
exports.default = ForwardRef;
