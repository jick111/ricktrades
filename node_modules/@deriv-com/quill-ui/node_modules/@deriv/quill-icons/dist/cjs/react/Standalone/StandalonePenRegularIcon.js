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
exports.StandalonePenRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePenRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm21.43 8.063-2.11 2.148 2.97 2.969 2.148-2.11c.351-.39.351-.976 0-1.328l-1.68-1.68c-.352-.351-.938-.351-1.328 0m-3.008 3.007-9.18 9.22a2.3 2.3 0 0 0-.664 1.054l-1.055 3.633 3.633-1.094c.39-.117.781-.313 1.055-.625l9.219-9.18zm5.234-3.906 1.68 1.68c.82.86.82 2.226 0 3.086L13.109 24.156c-.468.43-1.015.782-1.601.938L6.78 26.5c-.234.04-.468 0-.625-.156-.156-.157-.195-.39-.156-.625l1.406-4.727c.157-.586.508-1.133.938-1.601L20.57 7.164c.86-.82 2.227-.82 3.086 0' })));
exports.StandalonePenRegularIcon = StandalonePenRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePenRegularIcon);
exports.default = ForwardRef;
