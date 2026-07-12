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
exports.LegacyTradeTypeInsOutsIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyTradeTypeInsOutsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#c88ec08e164a0b2c5436242536576e7f__a)' },
        React.createElement("path", { fill: '#333', d: 'M15.5 15a.5.5 0 0 1 .09.992L15.5 16H.5a.5.5 0 0 1-.09-.992L.5 15zM5 12.292l2.146-2.146a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07-3.013 3.012a.5.5 0 0 1-.236.123l-.036.005h-.002l-.014.003-.026.001h.02l.019-.004L4.5 14a.5.5 0 0 1-.151-.023l-.04-.015a1 1 0 0 1-.076-.04l-.035-.024-.005-.003-.001-.001-.046-.04.042.037.01.007-.04-.033-3.012-3.011a.5.5 0 0 1 .638-.765l.07.057L4 12.292V8H.5a.5.5 0 0 1-.09-.992L.5 7H4V.5a.5.5 0 0 1 .41-.492L4.5 0a.5.5 0 0 1 .492.41L5 .5V7h6V2.707L8.854 4.854a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07 3.013-3.012a.5.5 0 0 1 .236-.123l.036-.006L11.5 1h.011q.032 0 .063.005l.031.006.046.012.04.015a1 1 0 0 1 .076.04l.039.026.048.042-.043-.038.011.01.02.017 3.012 3.011a.5.5 0 0 1-.638.765l-.07-.057L12 2.707V7h3.5a.5.5 0 0 1 .09.992L15.5 8H12v6.5a.5.5 0 0 1-.41.492L11.5 15a.5.5 0 0 1-.492-.41L11 14.5V8H5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c88ec08e164a0b2c5436242536576e7f__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyTradeTypeInsOutsIcon = LegacyTradeTypeInsOutsIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyTradeTypeInsOutsIcon);
exports.default = ForwardRef;
