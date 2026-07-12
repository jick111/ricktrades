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
exports.LegacyVisibilityOff2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyVisibilityOff2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#98d7576c7ba7b7e769c30486069f2241__a)' },
        React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M15.65 2.76a1 1 0 0 0-1.3-1.52l-2.324 1.992C10.927 2.525 9.578 2 8 2c-2.162 0-3.893.986-5.142 2.072C1.61 5.157.78 6.396.386 7.052a1.84 1.84 0 0 0 0 1.897 13 13 0 0 0 2.002 2.544L.349 13.241a1 1 0 1 0 1.302 1.518l2.323-1.99C5.073 13.474 6.422 14 8 14c2.162 0 3.893-.986 5.142-2.072 1.247-1.085 2.078-2.324 2.472-2.98a1.84 1.84 0 0 0 0-1.897 13 13 0 0 0-2.002-2.544zm-5.23 1.85A5.2 5.2 0 0 0 8 4c-1.521 0-2.804.69-3.83 1.581C3.19 6.435 2.504 7.424 2.15 8c.321.524.92 1.391 1.763 2.186l1.088-.932a3.25 3.25 0 0 1 4.697-4.026zM11 6.745l1.087-.932A11 11 0 0 1 13.85 8c-.353.576-1.04 1.565-2.02 2.419C10.804 11.31 9.52 12 8 12c-.89 0-1.697-.236-2.42-.61l.723-.618A3.25 3.25 0 0 0 11 6.746m-2.56-.44a1.753 1.753 0 0 0-2.181 1.87zm-.88 3.388 2.181-1.87q.009.087.009.176a1.75 1.75 0 0 1-2.19 1.694', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '98d7576c7ba7b7e769c30486069f2241__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyVisibilityOff2pxIcon = LegacyVisibilityOff2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyVisibilityOff2pxIcon);
exports.default = ForwardRef;
