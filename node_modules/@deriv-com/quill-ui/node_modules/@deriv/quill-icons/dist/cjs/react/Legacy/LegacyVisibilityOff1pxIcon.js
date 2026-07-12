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
exports.LegacyVisibilityOff1pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyVisibilityOff1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M14.177 2.118a.5.5 0 0 1 .646.764l-2.048 1.732A7.9 7.9 0 0 1 15.333 8c-1.153 2.927-4 5-7.333 5a7.83 7.83 0 0 1-3.908-1.038l-2.269 1.92a.5.5 0 1 1-.646-.764l2.047-1.733A7.9 7.9 0 0 1 .667 8C1.82 5.073 4.667 3 8 3a7.83 7.83 0 0 1 3.909 1.038zm-2.265 3.226L10.58 6.472c.267.448.42.97.42 1.528 0 1.653-1.347 3-3 3-.736 0-1.41-.267-1.933-.708l-1.106.935C5.88 11.727 6.914 12 8 12c2.585 0 4.877-1.55 6-4a7.05 7.05 0 0 0-2.088-2.656M8 4C5.422 4 3.122 5.55 2 8a7.05 7.05 0 0 0 2.086 2.656L5.42 9.528A3 3 0 0 1 5 8c0-1.653 1.347-3 3-3 .736 0 1.411.267 1.934.709l1.105-.935A6.34 6.34 0 0 0 8 4m1.802 3.13L6.845 9.633A2 2 0 0 0 9.802 7.13M8 6a2 2 0 0 0-1.802 2.87l2.957-2.503A2 2 0 0 0 8 6' })));
exports.LegacyVisibilityOff1pxIcon = LegacyVisibilityOff1pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyVisibilityOff1pxIcon);
exports.default = ForwardRef;
