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
exports.LegacyWarningIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyWarningIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#9d1a5841d8157cb3acf1c6f3e1299ca1__a)' },
        React.createElement("path", { fill: '#FFAD3A', d: 'M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0m.003 10.667q-.55 0-.943.392-.391.393-.393.944 0 .553.393.942t.943.388.94-.388.39-.942q0-.552-.39-.944a1.27 1.27 0 0 0-.94-.392m-.317-7.968c-.629.157-1.02.655-1.02 1.258.032.365.059.733.09 1.097l.27 4.135c.031.47.449.811.987.811.539 0 .961-.364.988-.839 0-.165.018-.717.031-.839.058-.89.122-1.779.18-2.668l.121-1.729c0-.207-.031-.392-.121-.576-.27-.516-.898-.779-1.526-.65' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9d1a5841d8157cb3acf1c6f3e1299ca1__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyWarningIcon = LegacyWarningIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyWarningIcon);
exports.default = ForwardRef;
