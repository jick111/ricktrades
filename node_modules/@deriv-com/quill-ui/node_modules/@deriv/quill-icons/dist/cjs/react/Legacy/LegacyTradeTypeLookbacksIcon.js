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
exports.LegacyTradeTypeLookbacksIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyTradeTypeLookbacksIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#068928d1eb84cba86c40b97d3a6bcaea__a)' },
        React.createElement("path", { fill: '#333', d: 'M9.5 0a6.5 6.5 0 1 1 0 13H1.707l2.147 2.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1-.135-.249A.5.5 0 0 1 0 12.5l.005.074L0 12.512V12.5a.5.5 0 0 1 .077-.267.5.5 0 0 1 .07-.087l-.045.052.033-.04.011-.012 3-3a.5.5 0 1 1 .708.708L1.707 12H9.5a5.5 5.5 0 0 0 5.496-5.279L15 6.5A5.5 5.5 0 0 0 9.5 1h-5a.5.5 0 0 1 0-1z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '068928d1eb84cba86c40b97d3a6bcaea__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyTradeTypeLookbacksIcon = LegacyTradeTypeLookbacksIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyTradeTypeLookbacksIcon);
exports.default = ForwardRef;
