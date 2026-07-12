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
exports.LegacyExitSpotIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyExitSpotIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#adc6bb69076fe82699d0d3e074b99da8__a)' },
        React.createElement("path", { fill: '#4BB4B3', d: 'M8 0a8 8 0 0 1 7.994 8.318L16 8a8 8 0 0 1-.06.985l-.005.042a8 8 0 0 1-.043.292l-.01.052a8 8 0 0 1-.202.876 8 8 0 0 1-.676 1.623 8.04 8.04 0 0 1-3.134 3.133l.253-.146a8 8 0 0 1-1.5.703 8 8 0 0 1-1.625.378 8 8 0 0 1-.306.032l-.015.002a8 8 0 0 1-.428.024L8 16a8 8 0 0 1-8-8v-.001l.004-.248.002-.072L0 8a8.1 8.1 0 0 1 .243-1.964A8 8 0 0 1 .997 4.13a8.04 8.04 0 0 1 2.7-2.876l.18-.111q.129-.078.253-.146l-.253.146A8 8 0 0 1 5.352.449l.03-.01A7.9 7.9 0 0 1 8 0m0 11.429H4.572v2.29A6.64 6.64 0 0 0 8 14.667zm5.719 0h-2.29v2.29a6.7 6.7 0 0 0 2.29-2.29m-2.29-3.43H8v3.43h3.429zM4.572 8 1.333 8c0 1.254.346 2.427.948 3.429h2.29zm9.147-3.428h-2.29V8h3.238a6.64 6.64 0 0 0-.948-3.429m-5.72 0H4.573V8H8zm.002-3.238v3.238h3.428v-2.29A6.64 6.64 0 0 0 8 1.333m-5.72 3.238h2.29v-2.29a6.7 6.7 0 0 0-2.29 2.29' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'adc6bb69076fe82699d0d3e074b99da8__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyExitSpotIcon = LegacyExitSpotIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyExitSpotIcon);
exports.default = ForwardRef;
