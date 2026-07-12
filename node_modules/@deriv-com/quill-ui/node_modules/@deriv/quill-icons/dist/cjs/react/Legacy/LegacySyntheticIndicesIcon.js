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
exports.LegacySyntheticIndicesIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacySyntheticIndicesIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', d: 'm13 10 1-.5-1-3h9L16 15l-1-2.5-1 .5 1 2.5H6L12 7zM5.5 16.5H15L13 19l1 .5 2-2.5 4 8.5h-9.5l2-3-1-.5-2 3zM27 15.5l-4-9-6.158 9H20v1h-3.25L21 25l6-8.5h-4v-1z' }),
    React.createElement("path", { fill: '#33658A', fillRule: 'evenodd', d: 'M6 0a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zm7 10 1-.5-1-3h9L16 15l-1-2.5-1 .5 1 2.5H6L12 7zm-7.5 6.5H15L13 19l1 .5 2-2.5 4 8.5h-9.5l2-3-1-.5-2 3zM23 6.5l4 9h-4v1h4L21 25l-4.25-8.5H20v-1h-3.158z', clipRule: 'evenodd' })));
exports.LegacySyntheticIndicesIcon = LegacySyntheticIndicesIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacySyntheticIndicesIcon);
exports.default = ForwardRef;
