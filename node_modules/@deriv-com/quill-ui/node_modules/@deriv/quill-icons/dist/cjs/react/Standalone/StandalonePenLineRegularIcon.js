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
exports.StandalonePenLineRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePenLineRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M21.508 8.063c-.352-.352-.938-.352-1.328 0l-2.11 2.148 2.97 2.969 2.148-2.11c.351-.39.351-.976 0-1.328zM7.992 20.289c-.312.273-.508.664-.625 1.055l-1.094 3.633 3.633-1.055c.39-.117.781-.352 1.055-.664l9.219-9.18-3.008-3.008zM19.32 7.164c.86-.82 2.227-.82 3.086 0l1.68 1.68c.82.86.82 2.226 0 3.086L11.859 24.156c-.468.43-1.015.782-1.601.938L5.53 26.5a.61.61 0 0 1-.625-.156c-.156-.157-.195-.39-.156-.625l1.406-4.727c.157-.586.508-1.133.938-1.601zM14.125 25.25h12.5c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-12.5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625' })));
exports.StandalonePenLineRegularIcon = StandalonePenLineRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePenLineRegularIcon);
exports.default = ForwardRef;
