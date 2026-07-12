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
exports.LegacyGoogleIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyGoogleIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 17', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333' },
        React.createElement("path", { d: 'M16 8.188q0-.825-.147-1.637h-7.69v3.093h4.393a3.67 3.67 0 0 1-1.628 2.415l2.637 2.01C15.11 12.673 16 10.623 16 8.187' }),
        React.createElement("path", { d: 'M10.929 12.06c-.73.48-1.665.764-2.765.764-2.128 0-3.926-1.407-4.568-3.3L.867 11.596c1.385 2.702 4.21 4.41 7.297 4.406 2.206 0 4.054-.714 5.402-1.937z' }),
        React.createElement("path", { d: 'M3.595 6.483.867 4.41a7.89 7.89 0 0 0 0 7.19l2.728-2.073c-.339-.99-.339-2.06 0-3.044' }),
        React.createElement("path", { d: 'M8.164 0C5.077 0 2.252 1.708.867 4.41l2.728 2.073c.642-1.893 2.44-3.3 4.569-3.3 1.197 0 2.274.405 3.118 1.196l2.344-2.297C12.213.792 10.365 0 8.164 0' }))));
exports.LegacyGoogleIcon = LegacyGoogleIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyGoogleIcon);
exports.default = ForwardRef;
