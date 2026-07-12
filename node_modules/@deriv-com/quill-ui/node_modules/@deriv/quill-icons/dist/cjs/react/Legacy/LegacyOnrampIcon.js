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
exports.LegacyOnrampIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyOnrampIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#d5a1f2f93d471d77d1da3a8ba62ae7c9__a)' },
        React.createElement("path", { fill: '#333', d: 'M12 0a4 4 0 0 1 4 4v9.5a2.5 2.5 0 0 1-2.336 2.495L13.5 16l-9.46-.001L4 16a4 4 0 0 1-3.995-3.8L0 12a4 4 0 0 1 5.13-3.838l3.032-3.031A4 4 0 0 1 12 0M4 9a3 3 0 1 0 0 6h.03A3 3 0 0 0 4 9m4.6-2.893L6.106 8.599A3.997 3.997 0 0 1 6.646 15H13.5a1.5 1.5 0 0 0 1.493-1.355L15 13.5l.001-6.855a3.997 3.997 0 0 1-6.402-.538M4.407 9.183v.67c.53.176.894.673.894 1.238v.112h-.82v-.112a.485.485 0 1 0-.969 0c0 .27.218.487.485.487a1.308 1.308 0 0 1 .41 2.548v.67h-.819v-.67a1.31 1.31 0 0 1-.895-1.238v-.113h.819v.113c0 .268.218.486.485.486a.486.486 0 0 0 0-.974 1.308 1.308 0 0 1-.409-2.547v-.67zM12 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6M6.5 3l.086.007a.5.5 0 0 1 .268.847l-3 3-.07.057a.5.5 0 0 1-.638-.057l-.057-.07a.5.5 0 0 1 .057-.638L5.293 4H4.5l-.09-.008A.5.5 0 0 1 4.5 3zm5.002-1.343v.667h.664v-.667h.664v.667a.997.997 0 0 1 .737 1.668c.168.186.26.426.259.676a.994.994 0 0 1-.996.992v.667h-.664V5.66h-.664v.667h-.664V5.66h-.665v-.668h.665V2.992h-.665v-.667h.665v-.667zm1.328 2.669h-1.328v.667h1.328a.33.33 0 0 0 .332-.333.33.33 0 0 0-.332-.335m0-1.335h-1.328v.668h1.328a.33.33 0 0 0 .332-.334.33.33 0 0 0-.332-.335' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd5a1f2f93d471d77d1da3a8ba62ae7c9__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyOnrampIcon = LegacyOnrampIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyOnrampIcon);
exports.default = ForwardRef;
