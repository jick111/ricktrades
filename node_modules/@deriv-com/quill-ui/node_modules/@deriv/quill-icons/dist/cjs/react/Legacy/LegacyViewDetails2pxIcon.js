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
exports.LegacyViewDetails2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyViewDetails2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', clipPath: 'url(#aa0081945e6ff3d031eda2d07f794a85__a)' },
        React.createElement("path", { d: 'M6 3.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5zM5.25 6A.75.75 0 0 1 6 5.25h4a.75.75 0 0 1 0 1.5H6A.75.75 0 0 1 5.25 6M6 7.25a.75.75 0 0 0 0 1.5h4a.75.75 0 0 0 0-1.5z' }),
        React.createElement("path", { fillRule: 'evenodd', d: 'M5 0a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h5.113a2.74 2.74 0 0 0 1.887.75c.487 0 .944-.127 1.34-.348l1.13 1.128a.75.75 0 1 0 1.06-1.06l-1.128-1.13c.222-.396.348-.853.348-1.34a2.74 2.74 0 0 0-.75-1.887V3a3 3 0 0 0-3-3zm7 9.25A2.75 2.75 0 0 0 9.25 12H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zm0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'aa0081945e6ff3d031eda2d07f794a85__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyViewDetails2pxIcon = LegacyViewDetails2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyViewDetails2pxIcon);
exports.default = ForwardRef;
