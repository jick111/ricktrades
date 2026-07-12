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
exports.LegacyCalendarDateFrom2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyCalendarDateFrom2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333' },
        React.createElement("path", { d: 'M5.661 11.75a1 1 0 1 1 0-1.5H11a.75.75 0 0 1 0 1.5zM4.25 9A.75.75 0 0 1 5 8.25h6.75v1.5H5A.75.75 0 0 1 4.25 9' }),
        React.createElement("path", { fillRule: 'evenodd', d: 'M6 2a1 1 0 0 0-2 0 3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3 1 1 0 1 0-2 0zm6 2a1 1 0 0 1 1 1H3a1 1 0 0 1 1-1zm-9 8V7h10v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1', clipRule: 'evenodd' }))));
exports.LegacyCalendarDateFrom2pxIcon = LegacyCalendarDateFrom2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyCalendarDateFrom2pxIcon);
exports.default = ForwardRef;
