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
exports.LegacyTurboIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyTurboIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', clipPath: 'url(#bad5a211d71e94b8985302c672455d9d__a)' },
        React.createElement("path", { d: 'M0 14h1.667v1H0zM3.667 14h1.666v1H3.667zM7.333 14H9v1H7.333zM12 13h4v3h-4l-1.5-1.5z' }),
        React.createElement("path", { fillRule: 'evenodd', d: 'M0 .5A.5.5 0 0 1 .5 0H9v1H.5A.5.5 0 0 1 0 .5', clipRule: 'evenodd' }),
        React.createElement("path", { d: 'M15.5 0a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V1.707L6.854 9.854a.5.5 0 0 1-.708 0L2.5 6.207 0 8.707V7.293l2.146-2.147a.5.5 0 0 1 .708 0L6.5 8.793 14.293 1H11V0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'bad5a211d71e94b8985302c672455d9d__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyTurboIcon = LegacyTurboIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyTurboIcon);
exports.default = ForwardRef;
