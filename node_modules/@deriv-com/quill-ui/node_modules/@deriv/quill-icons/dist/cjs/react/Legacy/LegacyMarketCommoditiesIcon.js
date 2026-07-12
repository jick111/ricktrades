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
exports.LegacyMarketCommoditiesIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyMarketCommoditiesIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#1439aff9332301b59989b8048778412d__a)' },
        React.createElement("path", { fill: '#333', d: 'M10 3a.5.5 0 0 1 .447.276L12.308 7H13.5a.5.5 0 0 1 .398.197l.05.08 2 4A.5.5 0 0 1 15.5 12H.5a.5.5 0 0 1-.447-.724l2-4A.5.5 0 0 1 2.5 7h1.19l1.863-3.724a.5.5 0 0 1 .354-.267L6 3zm3.19 5H9.846l-1.125 3h5.969zM6.153 8H2.809l-1.5 3h5.969zm2.625 0H7.22L8 10.076zm.912-4H6.309l-1.5 3h6.381z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1439aff9332301b59989b8048778412d__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyMarketCommoditiesIcon = LegacyMarketCommoditiesIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyMarketCommoditiesIcon);
exports.default = ForwardRef;
