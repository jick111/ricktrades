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
exports.LegacyViewDetails1pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyViewDetails1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#14c1831185d47b84e2de53e43f2bcf8e__a)' },
        React.createElement("path", { fill: '#333', d: 'M11.5 1a1.5 1.5 0 0 1 1.493 1.356L13 2.5v6.671a3 3 0 0 1 1.445 4.567l1.409 1.408a.5.5 0 0 1-.638.765l-.07-.057-1.408-1.409a2.997 2.997 0 0 1-4.239-.788L9.5 14h-5a1.5 1.5 0 0 1-1.493-1.355L3 12.5v-10a1.5 1.5 0 0 1 1.356-1.493L4.5 1zm.5 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-.5-8h-7a.5.5 0 0 0-.492.41L4 2.5v10a.5.5 0 0 0 .41.492L4.5 13h4.671A3 3 0 0 1 12 9V2.5a.5.5 0 0 0-.41-.492zm-3 6a.5.5 0 0 1 .09.992L8.5 9h-3a.5.5 0 0 1-.09-.992L5.5 8zm2-2a.5.5 0 0 1 .09.992L10.5 7h-5a.5.5 0 0 1-.09-.992L5.5 6zm0-2a.5.5 0 0 1 .09.992L10.5 5h-5a.5.5 0 0 1-.09-.992L5.5 4z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '14c1831185d47b84e2de53e43f2bcf8e__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyViewDetails1pxIcon = LegacyViewDetails1pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyViewDetails1pxIcon);
exports.default = ForwardRef;
