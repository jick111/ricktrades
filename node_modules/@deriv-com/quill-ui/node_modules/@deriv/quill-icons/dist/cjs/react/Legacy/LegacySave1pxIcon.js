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
exports.LegacySave1pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacySave1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M3.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H4V9.5A1.5 1.5 0 0 1 5.5 8h5A1.5 1.5 0 0 1 12 9.5V13h.5a.5.5 0 0 0 .5-.5V5.914a.5.5 0 0 0-.146-.353L11 3.707V5.5A1.5 1.5 0 0 1 9.5 7h-4A1.5 1.5 0 0 1 4 5.5V3zm0-1A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5.914a1.5 1.5 0 0 0-.44-1.06l-2.414-2.415A1.5 1.5 0 0 0 10.086 2zM5 3v2.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V3zm6 10V9.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5V13z', clipRule: 'evenodd' })));
exports.LegacySave1pxIcon = LegacySave1pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacySave1pxIcon);
exports.default = ForwardRef;
