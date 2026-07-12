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
exports.CurrencyEtcIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const CurrencyEtcIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#b796b99994996cf97ea27d5869a043e0__a)' },
        React.createElement("path", { fill: '#0B8311', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: '#fff', d: 'M8.591 17.073c2.611 1.386 5.335 2.837 7.44 3.96l7.378-3.96a3509 3509 0 0 1-7.378 10.93c-2.486-3.65-5.23-7.675-7.44-10.93m.284-1.095 7.164-3.823 7.07 3.795-7.066 3.827zm7.156-5.047-7.44 3.916 7.407-10.845 7.41 10.87z' }),
        React.createElement("path", { fill: '#ADCDAD', d: 'm16.03 21.033 7.379-3.96c-2.672 3.968-7.378 10.93-7.378 10.93zm.009-8.878 7.07 3.795-7.066 3.827zm-.009-1.224-.032-6.929 7.41 10.87z' }),
        React.createElement("path", { fill: '#AECDAE', d: 'm8.875 15.978 7.164.588 7.07-.612-7.067 3.826z' }),
        React.createElement("path", { fill: '#5B9C5B', d: 'm16.039 16.566 7.07-.612-7.067 3.826z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b796b99994996cf97ea27d5869a043e0__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.CurrencyEtcIcon = CurrencyEtcIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.CurrencyEtcIcon);
exports.default = ForwardRef;
