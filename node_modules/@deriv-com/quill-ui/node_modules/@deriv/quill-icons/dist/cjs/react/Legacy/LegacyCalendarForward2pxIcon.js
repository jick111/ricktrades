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
exports.LegacyCalendarForward2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyCalendarForward2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333' },
        React.createElement("path", { d: 'M5.47 8.47a.75.75 0 0 0 0 1.06l.47.47-.47.47a.75.75 0 1 0 1.06 1.06l1-1a.75.75 0 0 0 0-1.06l-1-1a.75.75 0 0 0-1.06 0M8.47 8.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 0 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 0-1.06' }),
        React.createElement("path", { fillRule: 'evenodd', d: 'M5 1a1 1 0 0 1 1 1h4a1 1 0 1 1 2 0 3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3 1 1 0 0 1 1-1M4 4a1 1 0 0 0-1 1h10a1 1 0 0 0-1-1zM3 7v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7z', clipRule: 'evenodd' }))));
exports.LegacyCalendarForward2pxIcon = LegacyCalendarForward2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyCalendarForward2pxIcon);
exports.default = ForwardRef;
