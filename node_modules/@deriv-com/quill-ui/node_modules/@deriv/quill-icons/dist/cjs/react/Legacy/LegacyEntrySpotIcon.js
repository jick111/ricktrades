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
exports.LegacyEntrySpotIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyEntrySpotIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#db4fd1c5581841c11c421db3383ebfed__a)' },
        React.createElement("path", { fill: '#333', d: 'M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1.143a6.86 6.86 0 0 0-6.84 6.356H8.13L6.167 5.496a.59.59 0 0 1-.066-.744l.066-.081a.563.563 0 0 1 .808 0l2.858 2.917A.59.59 0 0 1 10 8l-.006-.081.005.05L10 8a1 1 0 0 1-.006.082l-.004.012a.57.57 0 0 1-.157.318L6.975 11.33a.563.563 0 0 1-.808 0 .59.59 0 0 1 0-.825L8.131 8.5h-6.97A6.858 6.858 0 1 0 8 1.144' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'db4fd1c5581841c11c421db3383ebfed__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyEntrySpotIcon = LegacyEntrySpotIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyEntrySpotIcon);
exports.default = ForwardRef;
