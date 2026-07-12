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
exports.SocialTelegramBrandIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const SocialTelegramBrandIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: 'url(#913993d6773c61e1f99d7df064d39060__a)', d: 'M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16' }),
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M7.243 15.83q6.996-3.047 9.33-4.019c4.444-1.848 5.367-2.169 5.969-2.18.132-.002.428.031.62.187a.67.67 0 0 1 .228.433c.021.125.047.408.026.63-.24 2.53-1.282 8.67-1.812 11.503-.225 1.199-.666 1.601-1.094 1.64-.929.086-1.634-.614-2.534-1.204-1.409-.923-2.204-1.497-3.571-2.398-1.58-1.041-.556-1.613.345-2.548.235-.245 4.33-3.969 4.408-4.306.01-.043.02-.2-.074-.283-.094-.084-.232-.055-.331-.033q-.212.05-6.75 4.461-.957.658-1.735.641c-.57-.012-1.67-.323-2.487-.588-1.002-.326-1.798-.498-1.729-1.051q.055-.432 1.19-.884', clipRule: 'evenodd' }),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: '913993d6773c61e1f99d7df064d39060__a', x1: 16, x2: 16, y1: 0, y2: 31.763, gradientUnits: 'userSpaceOnUse' },
            React.createElement("stop", { stopColor: '#2AABEE' }),
            React.createElement("stop", { offset: 1, stopColor: '#229ED9' })))));
exports.SocialTelegramBrandIcon = SocialTelegramBrandIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.SocialTelegramBrandIcon);
exports.default = ForwardRef;
