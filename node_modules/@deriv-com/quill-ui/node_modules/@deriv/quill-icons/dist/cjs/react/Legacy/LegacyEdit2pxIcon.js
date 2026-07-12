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
exports.LegacyEdit2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyEdit2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#2a90b099a10e09bc9a697e53ca4d5970__a)' },
        React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M10.293 1.293a3.121 3.121 0 1 1 4.414 4.414L4.414 16H0v-4.414zm3 1.414a1.12 1.12 0 0 0-1.586 0l-.97.97 1.586 1.586.97-.97a1.12 1.12 0 0 0 0-1.586m-2.03 3.616L9.677 4.738l-5.44 5.439 1.586 1.586zM2 12.414l1.177-1.176 1.586 1.585L3.586 14H2z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2a90b099a10e09bc9a697e53ca4d5970__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyEdit2pxIcon = LegacyEdit2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyEdit2pxIcon);
exports.default = ForwardRef;
