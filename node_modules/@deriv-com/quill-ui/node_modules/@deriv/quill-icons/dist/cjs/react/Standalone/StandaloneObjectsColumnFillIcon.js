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
exports.StandaloneObjectsColumnFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneObjectsColumnFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M9.125 7.75h3.75c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875v-6.25c0-1.016.82-1.875 1.875-1.875m10 7.5h3.75c1.016 0 1.875.86 1.875 1.875v6.25c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875v-6.25c0-1.016.82-1.875 1.875-1.875M7.25 22.125c0-1.016.82-1.875 1.875-1.875h3.75c1.016 0 1.875.86 1.875 1.875v1.25c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875zM19.125 7.75h3.75c1.016 0 1.875.86 1.875 1.875v1.25c0 1.055-.86 1.875-1.875 1.875h-3.75a1.85 1.85 0 0 1-1.875-1.875v-1.25c0-1.016.82-1.875 1.875-1.875' })));
exports.StandaloneObjectsColumnFillIcon = StandaloneObjectsColumnFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneObjectsColumnFillIcon);
exports.default = ForwardRef;
