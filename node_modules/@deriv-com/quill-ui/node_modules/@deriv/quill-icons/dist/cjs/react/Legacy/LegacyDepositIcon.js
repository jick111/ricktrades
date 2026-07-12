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
exports.LegacyDepositIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyDepositIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#3d0c04b494407618d44e3a7bd066288e__a)' },
        React.createElement("path", { fill: '#333', d: 'M4.5 0a4.49 4.49 0 0 1 4.242 2.989H12.5a2.5 2.5 0 0 1 2.5 2.5v2.779A2 2 0 0 1 16 10v2a2 2 0 0 1-1.016 1.741C14.844 14.995 13.786 16 12.5 16H2.54C1.16 16 .003 14.84.003 13.46V5h.024A4.5 4.5 0 0 1 4.5 0m8 3.989H8.972Q9 4.243 9 4.5a4.5 4.5 0 0 1-7.997 2.833v6.127c0 .828.709 1.54 1.537 1.54h9.96c.64 0 1.187-.425 1.402-1H11a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h3V5.489a1.5 1.5 0 0 0-1.5-1.5M14 9h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m-2 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2M4.5 1a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7m0 1.5A.5.5 0 0 1 5 3v1h1a.5.5 0 0 1 .492.41l.008.09A.5.5 0 0 1 6 5H5v1a.5.5 0 0 1-.41.492L4.5 6.5A.5.5 0 0 1 4 6V5H3a.5.5 0 0 1-.492-.41L2.5 4.5A.5.5 0 0 1 3 4h1V3a.5.5 0 0 1 .41-.492z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3d0c04b494407618d44e3a7bd066288e__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyDepositIcon = LegacyDepositIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyDepositIcon);
exports.default = ForwardRef;
