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
exports.LegacyGuide2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyGuide2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', fillRule: 'evenodd', clipPath: 'url(#f72ffba2e032991930f6e7a1002416d5__a)', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M6.872 5.849A.75.75 0 0 0 5.75 6.5v4a.75.75 0 0 0 1.122.651l3.5-2a.75.75 0 0 0 0-1.302zM8.488 8.5l-1.238.708V7.792z' }),
        React.createElement("path", { d: 'M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-1 1.732V11a3 3 0 0 1-3 3h-.382l.276.553a1 1 0 1 1-1.789.894L9.382 14H6.618l-.724 1.447a1 1 0 1 1-1.788-.894L4.382 14H4a3 3 0 0 1-3-3V4.732A2 2 0 0 1 0 3zm14 1H2V2h12zm-1 2H3v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f72ffba2e032991930f6e7a1002416d5__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyGuide2pxIcon = LegacyGuide2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyGuide2pxIcon);
exports.default = ForwardRef;
