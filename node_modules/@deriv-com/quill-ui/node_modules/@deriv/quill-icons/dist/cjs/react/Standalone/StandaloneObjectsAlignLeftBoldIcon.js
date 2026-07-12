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
exports.StandaloneObjectsAlignLeftBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneObjectsAlignLeftBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M6 7.438c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938v18.125c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937zm6.875 5.937h11.25v-2.5h-11.25zM11 10.875C11 9.859 11.82 9 12.875 9h11.25C25.141 9 26 9.86 26 10.875v2.5c0 1.055-.86 1.875-1.875 1.875h-11.25A1.85 1.85 0 0 1 11 13.375zm1.875 11.25h6.25v-2.5h-6.25zM11 19.625c0-1.016.82-1.875 1.875-1.875h6.25c1.016 0 1.875.86 1.875 1.875v2.5C21 23.18 20.14 24 19.125 24h-6.25A1.85 1.85 0 0 1 11 22.125z' })));
exports.StandaloneObjectsAlignLeftBoldIcon = StandaloneObjectsAlignLeftBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneObjectsAlignLeftBoldIcon);
exports.default = ForwardRef;
