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
exports.StandaloneFileLinesRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFileLinesRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M21 25.25c.664 0 1.25-.547 1.25-1.25V14h-4.375A1.85 1.85 0 0 1 16 12.125V7.75h-5c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25zm-3.125-12.5h4.336c-.04-.078-.078-.195-.156-.273l-4.532-4.532c-.078-.078-.195-.117-.273-.156v4.336c0 .352.273.625.625.625M11 6.5h6.094c.468 0 .976.234 1.328.586l4.492 4.492c.352.352.586.86.586 1.328V24c0 1.406-1.133 2.5-2.5 2.5H11A2.47 2.47 0 0 1 8.5 24V9c0-1.367 1.094-2.5 2.5-2.5m1.875 10h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-6.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m0 2.5h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-6.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625m0 2.5h6.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-6.25a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625' })));
exports.StandaloneFileLinesRegularIcon = StandaloneFileLinesRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFileLinesRegularIcon);
exports.default = ForwardRef;
