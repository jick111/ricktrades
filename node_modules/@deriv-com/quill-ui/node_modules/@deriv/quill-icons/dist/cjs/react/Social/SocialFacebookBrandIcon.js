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
exports.SocialFacebookBrandIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const SocialFacebookBrandIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#7fce41856e9998fbcd5b6df4a8a0d7d3__a)' },
        React.createElement("path", { fill: '#1877F2', fillRule: 'evenodd', d: 'M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16m2.5-11.249v11.055a16.1 16.1 0 0 1-5 0V20.75H9.438v-4.653H13.5V12.55c0-4.034 2.389-6.263 6.043-6.263 1.751 0 3.582.315 3.582.315v3.961h-2.018c-1.987 0-2.607 1.241-2.607 2.514v3.02h4.438l-.71 4.653z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: '#fff', d: 'M18.5 20.751v11.055a16.1 16.1 0 0 1-5 0V20.75H9.438v-4.653H13.5V12.55c0-4.034 2.389-6.263 6.043-6.263 1.751 0 3.582.315 3.582.315v3.961h-2.018c-1.987 0-2.607 1.241-2.607 2.514v3.02h4.438l-.71 4.653z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7fce41856e9998fbcd5b6df4a8a0d7d3__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.SocialFacebookBrandIcon = SocialFacebookBrandIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.SocialFacebookBrandIcon);
exports.default = ForwardRef;
