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
exports.LegacyCrosshairActiveIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyCrosshairActiveIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#63ce06f642f301ddbbb2787f5f4b3f12__a)' },
        React.createElement("path", { fill: '#333', d: 'M8 0a1 1 0 0 1 1 1v.577A6.505 6.505 0 0 1 14.425 7H15a1 1 0 1 1 0 2h-.577a6.505 6.505 0 0 1-5.422 5.423L9 15a1 1 0 1 1-2 0v-.576A6.505 6.505 0 0 1 1.577 9L1 9a1 1 0 1 1 0-2h.576A6.505 6.505 0 0 1 7 1.576V1a1 1 0 0 1 1-1m0 3.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '63ce06f642f301ddbbb2787f5f4b3f12__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyCrosshairActiveIcon = LegacyCrosshairActiveIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyCrosshairActiveIcon);
exports.default = ForwardRef;
