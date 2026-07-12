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
exports.LegacyFavoriteOnIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyFavoriteOnIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#87c8c6b1d67508271a0ce0f943617c72__a)' },
        React.createElement("path", { fill: '#FFAD3A', d: 'M8 12.815 3.824 15.01a.5.5 0 0 1-.725-.527l.797-4.65L.518 6.54a.5.5 0 0 1 .277-.852l4.669-.679L7.552.78a.5.5 0 0 1 .896 0l2.088 4.23 4.669.679a.5.5 0 0 1 .277.852l-3.378 3.293.797 4.65a.5.5 0 0 1-.725.527z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '87c8c6b1d67508271a0ce0f943617c72__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyFavoriteOnIcon = LegacyFavoriteOnIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyFavoriteOnIcon);
exports.default = ForwardRef;
