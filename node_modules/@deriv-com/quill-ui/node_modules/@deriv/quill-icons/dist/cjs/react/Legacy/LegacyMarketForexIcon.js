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
exports.LegacyMarketForexIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyMarketForexIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#83c4062a6e285e4975998bdf6bcefd8a__a)' },
        React.createElement("path", { fill: '#333', d: 'M9.5 3a.5.5 0 0 1 .429.243L11 5.028l1.071-1.785a.5.5 0 0 1 .343-.235L12.5 3h3a.5.5 0 0 1 .4.8l-2.798 3.731 2.827 4.712a.5.5 0 0 1-.342.75L15.5 13h-3a.5.5 0 0 1-.447-.276L11 10.618l-1.053 2.106a.5.5 0 0 1-.354.267L9.5 13h-3a.5.5 0 0 1-.429-.757L8.898 7.53 7.48 5.639A.5.5 0 0 1 7 6H3.5v1H6a.5.5 0 0 1 .492.41l.008.09v2a.5.5 0 0 1-.5.5H3.5v2.5a.5.5 0 0 1-.41.492L3 13H1a.5.5 0 0 1-.5-.5v-9A.5.5 0 0 1 1 3zM6.249 4H1.5v8h1V9.5a.5.5 0 0 1 .41-.492L3 9h2.5V8H3a.5.5 0 0 1-.492-.41L2.5 7.5v-2A.5.5 0 0 1 3 5h3.5v-.665zm2.968 0H7.5v.001L9.9 7.2a.5.5 0 0 1 .093.382l-.027.098-.037.077L7.382 12H9.19l1.363-2.724a.5.5 0 0 1 .846-.078l.048.078L12.81 12h1.808l-2.546-4.243a.5.5 0 0 1-.016-.484L12.1 7.2 14.5 4h-1.718l-1.353 2.257a.5.5 0 0 1-.804.074l-.054-.074z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '83c4062a6e285e4975998bdf6bcefd8a__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyMarketForexIcon = LegacyMarketForexIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyMarketForexIcon);
exports.default = ForwardRef;
