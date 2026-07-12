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
exports.LegacyIndicatorsIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyIndicatorsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M20.5 2a.5.5 0 0 1 .492.41L21 2.5V4h.5a.5.5 0 0 1 .492.41L22 4.5a.5.5 0 0 1-.41.492L21.5 5H21v8.5a.5.5 0 0 1-.41.492L20.5 14a.5.5 0 0 1-.492-.41L20 13.5V5H4v15h13.5a.5.5 0 0 1 .492.41l.008.09a.5.5 0 0 1-.41.492L17.5 21H4v.5a.5.5 0 0 1-.41.492L3.5 22a.5.5 0 0 1-.492-.41L3 21.5V21h-.5a.5.5 0 0 1-.492-.41L2 20.5a.5.5 0 0 1 .41-.492L2.5 20H3V5h-.5a.5.5 0 0 1-.492-.41L2 4.5a.5.5 0 0 1 .41-.492L2.5 4H3V2.5a.5.5 0 0 1 .41-.492L3.5 2a.5.5 0 0 1 .492.41L4 2.5V4h16V2.5a.5.5 0 0 1 .41-.492zm-1 13a.5.5 0 0 1 .492.41l.008.09V17h1.5a.5.5 0 0 1 .492.41l.008.09a.5.5 0 0 1-.41.492L21.5 18H20v1.5a.5.5 0 0 1-.41.492L19.5 20a.5.5 0 0 1-.492-.41L19 19.5V18h-1.5a.5.5 0 0 1-.492-.41L17 17.5a.5.5 0 0 1 .41-.492L17.5 17H19v-1.5a.5.5 0 0 1 .41-.492zm-2.39-5.812a.5.5 0 1 1 .78.624l-4 5a.5.5 0 0 1-.79-.012l-2.654-3.539-3.592 3.593a.5.5 0 0 1-.708-.708l4-4a.5.5 0 0 1 .754.054l2.613 3.484z' })));
exports.LegacyIndicatorsIcon = LegacyIndicatorsIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyIndicatorsIcon);
exports.default = ForwardRef;
