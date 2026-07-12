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
exports.LegacyExitTimeIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyExitTimeIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("rect", { width: 16, height: 16, fill: '#4BB4B3', rx: 8 }),
    React.createElement("path", { fill: '#fff', d: 'M3.798 2.667c.245 0 .444.199.444.444v.444h8.202c.491 0 .89.399.89.89v5.333c0 .49-.399.889-.89.889H4.242v2.222a.444.444 0 0 1-.444.444h-.02a.444.444 0 0 1-.445-.444V3.11c0-.245.2-.444.445-.444zM12.424 8h-1.818v1.778h1.818zM8.788 8H6.97v1.778h1.818zm1.818-1.778H8.788V8h1.818zm-3.636 0H5.152V8H6.97zm1.818-1.778H6.97v1.778h1.818zm3.636 0h-1.818v1.778h1.818z' })));
exports.LegacyExitTimeIcon = LegacyExitTimeIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyExitTimeIcon);
exports.default = ForwardRef;
