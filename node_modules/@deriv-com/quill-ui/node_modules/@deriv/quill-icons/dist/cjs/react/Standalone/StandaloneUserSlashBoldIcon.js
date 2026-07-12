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
exports.StandaloneUserSlashBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneUserSlashBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm5.484 6.734 6.016 4.688a4.993 4.993 0 0 1 5-4.922c2.734 0 5 2.266 5 5 0 2.344-1.602 4.258-3.71 4.844l10.82 8.515c.43.313.507.899.156 1.29-.313.43-.899.507-1.29.156L4.353 8.18c-.43-.313-.508-.899-.157-1.29.313-.43.899-.507 1.29-.156m9.844 7.696c.352.117.742.195 1.172.195a3.11 3.11 0 0 0 3.125-3.125A3.134 3.134 0 0 0 16.5 8.375a3.11 3.11 0 0 0-3.125 3.125c0 .703.195 1.328.547 1.836zm-1.015 3.984 2.343 1.836h-1.953c-2.578 0-4.687 1.914-5.039 4.375h12.578l2.266 1.797c-.156.078-.274.078-.43.078H8.883a1.134 1.134 0 0 1-1.133-1.133c0-3.71 2.89-6.758 6.563-6.953' })));
exports.StandaloneUserSlashBoldIcon = StandaloneUserSlashBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneUserSlashBoldIcon);
exports.default = ForwardRef;
