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
exports.CurrencyEursIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const CurrencyEursIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#69ed74306c4d4dc7f0fdecf1c80068cb__a)' },
        React.createElement("path", { fill: '#fff', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: '#2469E4', fillRule: 'evenodd', d: 'M0 16c0 8.837 7.163 16 16 16a15.95 15.95 0 0 0 6.351-1.31q-1.16-.12-2.3-.358-2.546-.547-4.664-1.668-4.414-2.34-6.21-6.849H3.84l1.621-3.835H8.23a18 18 0 0 1-.15-2.266q0-1.095.075-1.967H3.84l1.621-3.811h3.466q1.646-4.83 6.11-7.446A17.4 17.4 0 0 1 20.042.515 16 16 0 0 0 16 0C7.163 0 0 7.163 0 16M25.44 3.08c-4.917.63-9.81 2.669-11.63 6.857h14.82l-1.647 3.811H12.868q-.1.846-.1 2.067t.2 2.165h12.07l-1.646 3.835h-8.903c2.021 3.333 7.176 5.497 12.571 5.747A15.96 15.96 0 0 0 32 16c0-5.306-2.583-10.009-6.56-12.92', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '69ed74306c4d4dc7f0fdecf1c80068cb__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.CurrencyEursIcon = CurrencyEursIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.CurrencyEursIcon);
exports.default = ForwardRef;
