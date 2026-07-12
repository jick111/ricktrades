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
exports.StandaloneFiveRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFiveRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11.625 8.258c.078-.313.313-.508.625-.508h8.125c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-7.656l-1.563 6.25h6.094c2.734 0 5 2.266 5 5 0 2.773-2.266 5-5 5h-4.219c-1.289 0-2.5-.703-3.086-1.875l-.156-.312c-.156-.313 0-.704.274-.86a.64.64 0 0 1 .859.274l.156.351c.39.742 1.133 1.211 1.953 1.211h4.219a3.751 3.751 0 0 0 0-7.5h-6.875a.67.67 0 0 1-.508-.273c-.117-.157-.156-.352-.117-.508z' })));
exports.StandaloneFiveRegularIcon = StandaloneFiveRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFiveRegularIcon);
exports.default = ForwardRef;
