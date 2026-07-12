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
exports.CurrencyMkrIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const CurrencyMkrIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#5502f1a19eb4d978163dc09f531dac51__a)' },
        React.createElement("path", { fill: '#0090FF', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: 'url(#5502f1a19eb4d978163dc09f531dac51__b)', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: '#fff', d: 'M9.25 19.206v-6.44l4.883 3.676v2.764h1.246v-3.024a.73.73 0 0 0-.29-.58l-5.922-4.458a.73.73 0 0 0-1.165.582v7.48zm13.505 0v-6.44l-4.883 3.676v2.764h-1.247v-3.024a.73.73 0 0 1 .29-.58l5.922-4.456a.73.73 0 0 1 1.165.58v7.48z' })),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: '5502f1a19eb4d978163dc09f531dac51__b', x1: 16, x2: 16, y1: 0, y2: 32, gradientUnits: 'userSpaceOnUse' },
            React.createElement("stop", { stopColor: '#4FA89B' }),
            React.createElement("stop", { offset: 1, stopColor: '#6ACEBB' })),
        React.createElement("clipPath", { id: '5502f1a19eb4d978163dc09f531dac51__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.CurrencyMkrIcon = CurrencyMkrIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.CurrencyMkrIcon);
exports.default = ForwardRef;
