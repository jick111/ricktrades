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
exports.LegacyOpenLink2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyOpenLink2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', clipPath: 'url(#0f6fbcf97b86bab37afbc19e7b206d16__a)' },
        React.createElement("path", { d: 'M0 3a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-2a1 1 0 1 1 2 0v2a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3z' }),
        React.createElement("path", { d: 'M10 1a1 1 0 0 1 1-1h3a2 2 0 0 1 2 2v3a1 1 0 1 1-2 0V3.414L8.707 8.707a1 1 0 0 1-1.414-1.414L12.586 2H11a1 1 0 0 1-1-1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0f6fbcf97b86bab37afbc19e7b206d16__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyOpenLink2pxIcon = LegacyOpenLink2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyOpenLink2pxIcon);
exports.default = ForwardRef;
