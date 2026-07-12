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
exports.LegacyVisibility1pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyVisibility1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M8.333 4c2.579 0 4.878 1.55 6 4-1.122 2.45-3.415 4-6 4s-4.877-1.55-6-4c1.123-2.45 3.422-4 6-4m0-1C5 3 2.153 5.073 1 8c1.153 2.927 4 5 7.333 5s6.18-2.073 7.334-5c-1.154-2.927-4-5-7.334-5m0 3a2 2 0 1 1-.001 4.001A2 2 0 0 1 8.333 6m0-1c-1.653 0-3 1.347-3 3s1.347 3 3 3 3-1.347 3-3-1.346-3-3-3' })));
exports.LegacyVisibility1pxIcon = LegacyVisibility1pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyVisibility1pxIcon);
exports.default = ForwardRef;
