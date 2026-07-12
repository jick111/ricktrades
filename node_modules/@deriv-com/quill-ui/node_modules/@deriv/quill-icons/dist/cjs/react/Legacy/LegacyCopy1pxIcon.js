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
exports.LegacyCopy1pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyCopy1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', fillRule: 'evenodd', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M2 5.5A1.5 1.5 0 0 1 3.5 4h6A1.5 1.5 0 0 1 11 5.5v8A1.5 1.5 0 0 1 9.5 15h-6A1.5 1.5 0 0 1 2 13.5zM3.5 5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5z' }),
        React.createElement("path", { d: 'M4 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M4 9.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M4 11.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5' }),
        React.createElement("path", { d: 'M5 2.5A1.5 1.5 0 0 1 6.5 1h6A1.5 1.5 0 0 1 14 2.5v8a1.5 1.5 0 0 1-1.5 1.5H11v-1h1.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0-.5.5V4H5z' }))));
exports.LegacyCopy1pxIcon = LegacyCopy1pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyCopy1pxIcon);
exports.default = ForwardRef;
