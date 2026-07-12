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
exports.FlagJordanIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const FlagJordanIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#e6fb503758597e6500dd6dbace11ffaf__a)' },
        React.createElement("path", { fill: '#fff', d: 'M7.5 11 12 8 7.5 5H24v6z' }),
        React.createElement("path", { fill: '#E6223A', d: 'M0 2v12c0 .612.275 1.16.709 1.527L12 8 .709.473A2 2 0 0 0 0 2' }),
        React.createElement("path", { fill: '#333', d: 'M2 0A2 2 0 0 0 .709.473L7.5 5H24V2a2 2 0 0 0-2-2z' }),
        React.createElement("path", { fill: '#199E56', d: 'M7.5 11H24v3a2 2 0 0 1-2 2H2a2 2 0 0 1-1.291-.473z' }),
        React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'm4.667 9-.868.802.086-1.179-1.168-.178.975-.668-.589-1.024 1.13.346L4.667 6l.434 1.099 1.13-.346-.59 1.024.976.668-1.168.178.086 1.179z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: '#000', fillOpacity: 0.08, fillRule: 'evenodd', d: 'M22 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e6fb503758597e6500dd6dbace11ffaf__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h24v16H0z' })))));
exports.FlagJordanIcon = FlagJordanIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.FlagJordanIcon);
exports.default = ForwardRef;
