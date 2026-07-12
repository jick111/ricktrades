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
exports.LegacyThemeDarkIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyThemeDarkIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#3e9bb5e5bc3e2e18b372bc216e62182a__a)' },
        React.createElement("path", { fill: '#333', d: 'M7.875 15.86c-3.61 0-6.79-2.44-7.72-5.93-.05-.17 0-.36.13-.48a.53.53 0 0 1 .48-.13c4.61 1.23 8.81-2.3 8.81-6.75 0-.59-.08-1.2-.25-1.81-.05-.17 0-.36.13-.48.13-.13.31-.18.48-.13 3.49.94 5.93 4.11 5.93 7.72 0 4.41-3.59 8-8 8zm-6.49-5.39a7 7 0 0 0 6.49 4.39c3.86 0 7-3.14 7-7 0-2.88-1.77-5.43-4.39-6.49.06.4.09.8.09 1.19 0 4.8-4.27 8.69-9.19 7.91' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3e9bb5e5bc3e2e18b372bc216e62182a__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyThemeDarkIcon = LegacyThemeDarkIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyThemeDarkIcon);
exports.default = ForwardRef;
