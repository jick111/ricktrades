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
exports.StandaloneLinkedinIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneLinkedinIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M23.5 7.75c.664 0 1.25.586 1.25 1.29V24c0 .703-.586 1.25-1.25 1.25H8.46c-.663 0-1.21-.547-1.21-1.25V9.04c0-.704.547-1.29 1.21-1.29zm-10.977 15v-8.32H9.945v8.32zm-1.289-9.492c.82 0 1.485-.664 1.485-1.485 0-.82-.664-1.523-1.485-1.523-.859 0-1.523.703-1.523 1.523s.664 1.485 1.523 1.485M22.25 22.75v-4.57c0-2.227-.508-3.985-3.125-3.985-1.25 0-2.11.703-2.46 1.367h-.04V14.43h-2.46v8.32h2.577v-4.102c0-1.093.195-2.148 1.563-2.148 1.328 0 1.328 1.25 1.328 2.188v4.062z' })));
exports.StandaloneLinkedinIcon = StandaloneLinkedinIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneLinkedinIcon);
exports.default = ForwardRef;
