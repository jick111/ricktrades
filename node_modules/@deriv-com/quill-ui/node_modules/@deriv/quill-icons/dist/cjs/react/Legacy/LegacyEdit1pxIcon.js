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
exports.LegacyEdit1pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyEdit1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#675657eb234d8c0011022475db591550__a)' },
        React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M11.146 1.146a2.621 2.621 0 0 1 3.708 3.708L3.707 16H0v-3.707zm3 .708a1.62 1.62 0 0 0-2.292 0l-.647.646L13.5 4.793l.646-.647a1.62 1.62 0 0 0 0-2.292M12.793 5.5 10.5 3.207 2.707 11 5 13.293zM1 12.707l1-1L4.293 14l-1 1H1z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '675657eb234d8c0011022475db591550__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyEdit1pxIcon = LegacyEdit1pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyEdit1pxIcon);
exports.default = ForwardRef;
