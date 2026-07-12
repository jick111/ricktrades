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
exports.StandaloneLocationDotBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLocationDotBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M21.625 14c0-3.086-2.54-5.625-5.625-5.625A5.626 5.626 0 0 0 10.375 14c0 .508.156 1.25.586 2.266.39.937.976 2.03 1.64 3.125 1.133 1.797 2.422 3.515 3.399 4.765.938-1.25 2.227-2.968 3.36-4.765.663-1.094 1.25-2.188 1.64-3.125.43-1.016.625-1.758.625-2.266m1.875 0c0 3.438-4.57 9.492-6.602 12.031a1.178 1.178 0 0 1-1.835 0C13.07 23.492 8.5 17.438 8.5 14c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5m-6.25 0c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25m-4.375 0c0-1.094.586-2.11 1.563-2.695.937-.547 2.148-.547 3.124 0 .938.586 1.563 1.601 1.563 2.695 0 1.133-.625 2.148-1.562 2.734-.977.547-2.188.547-3.125 0A3.16 3.16 0 0 1 12.875 14' })));
exports.StandaloneLocationDotBoldIcon = StandaloneLocationDotBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLocationDotBoldIcon);
exports.default = ForwardRef;
