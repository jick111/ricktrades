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
exports.LegacyResetIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyResetIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#093b8fcdf17991fdb27ad230e7afc2e9__a)' },
        React.createElement("path", { fill: '#333', d: 'M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m0 1.143a6.857 6.857 0 1 0 0 13.714A6.857 6.857 0 0 0 8 1.143M5 7.5a.5.5 0 0 1 .5.5 2.5 2.5 0 0 0 4 2.001L8.5 10a.5.5 0 0 1-.09-.992L8.5 9h2a.5.5 0 0 1 .492.41L11 9.5v2a.5.5 0 0 1-.992.09L10 11.5v-.628A3.5 3.5 0 0 1 4.5 8a.5.5 0 0 1 .5-.5M5.5 4a.5.5 0 0 1 .492.41L6 4.5v.627A3.5 3.5 0 0 1 11.5 8a.5.5 0 0 1-1 0 2.5 2.5 0 0 0-4-2h1a.5.5 0 0 1 .09.992L7.5 7h-2a.5.5 0 0 1-.492-.41L5 6.5v-2a.5.5 0 0 1 .5-.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '093b8fcdf17991fdb27ad230e7afc2e9__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyResetIcon = LegacyResetIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyResetIcon);
exports.default = ForwardRef;
