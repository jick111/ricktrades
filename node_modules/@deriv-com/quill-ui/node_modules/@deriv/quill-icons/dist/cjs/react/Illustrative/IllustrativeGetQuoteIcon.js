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
exports.IllustrativeGetQuoteIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeGetQuoteIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M22.667 2.667H9.333A3.335 3.335 0 0 0 6 6v20a3.335 3.335 0 0 0 3.333 3.333h13.334A3.335 3.335 0 0 0 26 26V6a3.335 3.335 0 0 0-3.333-3.333M9.333 4h13.334c1.1 0 2 .9 2 2v7.333H7.333V6c0-1.1.9-2 2-2m13.334 24H9.333c-1.1 0-2-.9-2-2V14.667h17.334V26c0 1.1-.9 2-2 2' }),
        React.createElement("path", { d: 'M14 19.333c.367 0 .667-.3.667-.666S14.367 18 14 18h-1.333v-.667c0-.366-.3-.666-.667-.666s-.667.3-.667.666V18h-.666c-.734 0-1.334.6-1.334 1.333v1.334c0 .733.6 1.333 1.334 1.333h2.666v1.333H10c-.367 0-.667.3-.667.667s.3.667.667.667h1.333v.666c0 .367.3.667.667.667s.667-.3.667-.667v-.666h.666c.734 0 1.334-.6 1.334-1.334V22c0-.733-.6-1.333-1.334-1.333h-2.666v-1.334zM12.86 11.14c.133.133.3.193.473.193.174 0 .34-.066.474-.193L16 8.947l1.527 1.526c.26.26.68.26.94 0l2.24-2.24c.093.254.333.44.62.44.366 0 .666-.3.666-.666v-1.36a.6.6 0 0 0-.046-.234s-.007-.013-.014-.02a.5.5 0 0 0-.12-.173q-.021-.028-.053-.047a.5.5 0 0 0-.14-.093c-.02-.013-.04-.02-.067-.033A.7.7 0 0 0 21.32 6h-1.333c-.367 0-.667.3-.667.667 0 .286.18.526.433.626L17.987 9.06 16.46 7.533a.664.664 0 0 0-.94 0l-2.193 2.194-2.194-2.194a.664.664 0 1 0-.94.94zM17.333 18h3.334c.366 0 .666-.3.666-.667 0-.366-.3-.666-.666-.666h-3.334c-.366 0-.666.3-.666.666s.3.667.666.667M22 19.333h-4.667c-.366 0-.666.3-.666.667s.3.667.666.667H22c.367 0 .667-.3.667-.667s-.3-.667-.667-.667M17.333 23.333H20c.367 0 .667-.3.667-.666S20.367 22 20 22h-2.667c-.366 0-.666.3-.666.667 0 .366.3.666.666.666M21.333 24.667h-4c-.366 0-.666.3-.666.666s.3.667.666.667h4c.367 0 .667-.3.667-.667 0-.366-.3-.666-.667-.666' }))));
exports.IllustrativeGetQuoteIcon = IllustrativeGetQuoteIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeGetQuoteIcon);
exports.default = ForwardRef;
