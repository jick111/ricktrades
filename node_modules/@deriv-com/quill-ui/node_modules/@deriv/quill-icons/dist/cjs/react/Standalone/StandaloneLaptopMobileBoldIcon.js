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
exports.StandaloneLaptopMobileBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLaptopMobileBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M8.5 8.375A.64.64 0 0 0 7.875 9v10h9.375v2.5H5.375A1.85 1.85 0 0 1 3.5 19.625c0-.312.273-.625.625-.625H6V9c0-1.367 1.094-2.5 2.5-2.5H21c1.367 0 2.5 1.133 2.5 2.5v1.25h-1.875V9c0-.312-.312-.625-.625-.625zm10 5c0-1.016.82-1.875 1.875-1.875h6.25c1.016 0 1.875.86 1.875 1.875v11.25c0 1.055-.86 1.875-1.875 1.875h-6.25a1.85 1.85 0 0 1-1.875-1.875zm1.875 0v11.25h6.25v-11.25z' })));
exports.StandaloneLaptopMobileBoldIcon = StandaloneLaptopMobileBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLaptopMobileBoldIcon);
exports.default = ForwardRef;
