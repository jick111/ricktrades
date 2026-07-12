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
exports.LegacyTraderSHubIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyTraderSHubIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', clipPath: 'url(#ec095966bc2bfa3f2da63c8a71ebea9a__a)' },
        React.createElement("path", { d: 'M0 2a2 2 0 0 1 2-2h7.077a2 2 0 0 1 2 2v7.077a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z' }),
        React.createElement("path", { fillRule: 'evenodd', d: 'M22 1h-7.077a1 1 0 0 0-1 1v7.077a1 1 0 0 0 1 1H22a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1m-7.077-1a2 2 0 0 0-2 2v7.077a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM9.077 13.923H2a1 1 0 0 0-1 1V22a1 1 0 0 0 1 1h7.077a1 1 0 0 0 1-1v-7.077a1 1 0 0 0-1-1m-7.077-1a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h7.077a2 2 0 0 0 2-2v-7.077a2 2 0 0 0-2-2zM22 13.923h-7.077a1 1 0 0 0-1 1V22a1 1 0 0 0 1 1H22a1 1 0 0 0 1-1v-7.077a1 1 0 0 0-1-1m-7.077-1a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2v-7.077a2 2 0 0 0-2-2z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ec095966bc2bfa3f2da63c8a71ebea9a__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h24v24H0z' })))));
exports.LegacyTraderSHubIcon = LegacyTraderSHubIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyTraderSHubIcon);
exports.default = ForwardRef;
