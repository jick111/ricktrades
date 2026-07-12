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
exports.StandaloneInfoFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneInfoFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M14.125 9.625c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.874 0 .547.352.938.938.938 1.602 0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.875 0a1.87 1.87 0 0 1-.938-1.64M12.25 15.25c0-.664.547-1.25 1.25-1.25H16c.664 0 1.25.586 1.25 1.25V24h1.25c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h1.25v-7.5H13.5c-.703 0-1.25-.547-1.25-1.25' })));
exports.StandaloneInfoFillIcon = StandaloneInfoFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneInfoFillIcon);
exports.default = ForwardRef;
