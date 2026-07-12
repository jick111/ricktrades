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
exports.LegacyCashierIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyCashierIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M1.5 6a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5zM15 1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-2v1h1.5A1.5 1.5 0 0 1 16 6.5v7a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-7A1.5 1.5 0 0 1 1.5 5H2V3h5v2h5V4h-2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zm0 10H1v1h14zm-1.5-2h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-5 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m11-2h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1m-5 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1m-2 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1M6 4H3v1h3zm9-2h-5v1h5z' })));
exports.LegacyCashierIcon = LegacyCashierIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyCashierIcon);
exports.default = ForwardRef;
