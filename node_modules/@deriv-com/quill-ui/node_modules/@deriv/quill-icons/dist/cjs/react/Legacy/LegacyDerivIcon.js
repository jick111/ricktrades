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
exports.LegacyDerivIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyDerivIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#f1016188a8650d20167d5be67b7c6c97__a)' },
        React.createElement("path", { fill: '#333', d: 'M7.991 15.95h-2.21c-1.332 0-2.502-.52-3.295-1.465-.808-.962-1.121-2.24-.883-3.596l.184-1.052c.478-2.696 3.06-4.888 5.757-4.888h2.23l.752-4.265L14.475.05l-2.157 12.227c-.357 2.026-2.298 3.673-4.327 3.673m-.447-10c-2.235 0-4.376 1.821-4.772 4.06l-.184 1.052c-.186 1.06.05 2.047.664 2.78.6.714 1.498 1.107 2.53 1.107h2.21c1.565 0 3.065-1.277 3.341-2.847L13.246 1.26l-1.859.3-.773 4.39zm.378 7.341H6.58c-.68 0-1.282-.268-1.692-.757-.417-.497-.58-1.152-.46-1.844l.117-.657c.242-1.362 1.498-2.428 2.86-2.428h2.917l-.751 4.263c-.143.812-.851 1.423-1.648 1.423m-.518-4.686c-.862 0-1.721.734-1.876 1.603l-.116.655c-.068.396.017.761.24 1.028.218.257.547.4.927.4h1.343c.302 0 .606-.273.662-.596l.545-3.09z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f1016188a8650d20167d5be67b7c6c97__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyDerivIcon = LegacyDerivIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyDerivIcon);
exports.default = ForwardRef;
