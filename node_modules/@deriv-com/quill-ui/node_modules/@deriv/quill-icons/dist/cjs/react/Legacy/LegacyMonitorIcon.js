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
exports.LegacyMonitorIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyMonitorIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M.833 4c0-1.013.821-1.833 1.834-1.833h10.666c1.013 0 1.834.82 1.834 1.833v6.667c0 1.012-.821 1.833-1.834 1.833H9.476l.5 1h1.357a.5.5 0 0 1 0 1H4.667a.5.5 0 0 1 0-1h1.357l.5-1H2.667a1.833 1.833 0 0 1-1.834-1.833zm12.5 7.5H2.667a.833.833 0 0 1-.834-.833V4c0-.46.373-.833.834-.833h10.666c.46 0 .834.373.834.833v6.667c0 .46-.373.833-.834.833', clipRule: 'evenodd' })));
exports.LegacyMonitorIcon = LegacyMonitorIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyMonitorIcon);
exports.default = ForwardRef;
