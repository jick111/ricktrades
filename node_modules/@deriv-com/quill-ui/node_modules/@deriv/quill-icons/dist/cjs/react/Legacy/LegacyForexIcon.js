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
exports.LegacyForexIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyForexIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', d: 'M5 8v16h4v-6h5v-3H9v-3h6.4l2.1 3.5L13 24h4l3-5 3 5h4l-4.5-8.5L27 8h-4.5L20 12l-2.5-4z' }),
    React.createElement("path", { fill: '#33658A', fillRule: 'evenodd', d: 'M6 0a6 6 0 0 0-6 6v20a6 6 0 0 0 6 6h20a6 6 0 0 0 6-6V6a6 6 0 0 0-6-6zM5 24V8h12.5l2.5 4 2.5-4H27l-4.5 7.5L27 24h-4l-3-5-3 5h-4l4.5-8.5-2.1-3.5H9v3h5v3H9v6z', clipRule: 'evenodd' })));
exports.LegacyForexIcon = LegacyForexIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyForexIcon);
exports.default = ForwardRef;
