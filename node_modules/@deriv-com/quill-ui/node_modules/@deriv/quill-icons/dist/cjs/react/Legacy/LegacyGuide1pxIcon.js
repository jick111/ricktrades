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
exports.LegacyGuide1pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyGuide1pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', fillRule: 'evenodd', clipPath: 'url(#e744735ef3d6b1591cad44d8a08f5fe0__a)', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M6.765 5.076A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848zM9.557 8 7 9.598V6.402z' }),
        React.createElement("path", { d: 'M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v9.5a1.5 1.5 0 0 1-1.5 1.5h-2.191l.638 1.276a.5.5 0 1 1-.894.448L10.19 14H5.809l-.862 1.724a.5.5 0 1 1-.894-.448L4.69 14H2.5A1.5 1.5 0 0 1 1 12.5V3a1 1 0 0 1-1-1zm13.5 12h-11a.5.5 0 0 1-.5-.5V3h12v9.5a.5.5 0 0 1-.5.5M15 1H1v1h14z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e744735ef3d6b1591cad44d8a08f5fe0__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyGuide1pxIcon = LegacyGuide1pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyGuide1pxIcon);
exports.default = ForwardRef;
