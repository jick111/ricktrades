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
exports.StandaloneForwardFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneForwardFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M8.031 23.727c-.351.312-.898.39-1.328.156-.43-.195-.703-.625-.703-1.133v-12.5c0-.469.273-.898.703-1.133.43-.195.938-.117 1.328.195l6.719 5.586v3.242zM16 20.25v-10c0-.469.273-.898.703-1.133.43-.195.938-.117 1.328.195l7.5 6.25c.274.235.469.586.469.938 0 .39-.195.742-.469.977l-7.5 6.25c-.351.312-.898.39-1.328.156-.43-.195-.703-.625-.703-1.133z' })));
exports.StandaloneForwardFillIcon = StandaloneForwardFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneForwardFillIcon);
exports.default = ForwardRef;
