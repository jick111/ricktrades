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
exports.IllustrativeCryptoPairsIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const IllustrativeCryptoPairsIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M16.847 18.06c.333-.42.54-.94.54-1.513 0-1.12-.76-2.06-1.787-2.354v-.633c0-.367-.3-.667-.667-.667-.366 0-.666.3-.666.667v.527h-1.054v-.527c0-.367-.3-.667-.666-.667s-.667.3-.667.667v.533a1.86 1.86 0 0 0-1.787 1.854v4.773c0 1 .8 1.813 1.787 1.853v.534c0 .366.3.666.667.666.366 0 .666-.3.666-.666v-.527h1.054v.527c0 .366.3.666.666.666s.667-.3.667-.666v-.534a2.46 2.46 0 0 0 2.387-2.446 2.46 2.46 0 0 0-1.134-2.067zm-4.9-2.64h2.98c.62 0 1.12.507 1.12 1.12s-.507 1.12-1.12 1.12H11.42v-1.72c0-.293.233-.527.527-.527zm3.58 5.827h-3.58a.524.524 0 0 1-.527-.527V19h4.107c.62 0 1.12.507 1.12 1.12s-.507 1.12-1.12 1.12z' }),
        React.createElement("path", { d: 'M19.893 7.707s-.033-.04-.06-.054c-.02-.013-.04-.013-.06-.02a12.24 12.24 0 0 0-12.213 0c-.02.007-.04.007-.06.02-.027.014-.04.034-.06.054-3.647 2.14-6.107 6.1-6.107 10.626 0 4.527 2.46 8.487 6.107 10.627.02.013.033.04.06.053.027.014.053.02.087.034a12.216 12.216 0 0 0 12.16 0c.026-.014.053-.02.086-.034.027-.013.04-.033.06-.053C23.54 26.813 26 22.86 26 18.333c0-4.526-2.46-8.486-6.107-10.626m4.74 9.96h-1.586a9.42 9.42 0 0 0-4.114-7.134l.794-1.373a10.99 10.99 0 0 1 4.9 8.5zm-10.966 8.746c-4.46 0-8.08-3.626-8.08-8.08 0-4.453 3.626-8.08 8.08-8.08 4.453 0 8.08 3.627 8.08 8.08s-3.627 8.08-8.08 8.08M18.573 8.5l-.793 1.373a9.4 9.4 0 0 0-4.113-.96 9.4 9.4 0 0 0-4.114.96L8.76 8.5c1.48-.74 3.14-1.167 4.907-1.167s3.426.427 4.906 1.167m-10.966.66.793 1.373a9.43 9.43 0 0 0-4.113 7.134H2.7a10.99 10.99 0 0 1 4.9-8.5zm-4.9 9.833h1.586a9.42 9.42 0 0 0 4.114 7.134L7.613 27.5a10.99 10.99 0 0 1-4.9-8.5zm6.06 9.167.793-1.373c1.247.606 2.64.96 4.113.96a9.4 9.4 0 0 0 4.114-.96l.793 1.373c-1.48.74-3.14 1.167-4.907 1.167s-3.426-.427-4.906-1.167m10.966-.66-.793-1.373a9.43 9.43 0 0 0 4.113-7.134h1.587a10.99 10.99 0 0 1-4.9 8.5zM26.333 1.333a4.333 4.333 0 1 0 0 8.667 4.333 4.333 0 0 0 0-8.667m0 7.334c-1.653 0-3-1.347-3-3s1.347-3 3-3 3 1.346 3 3-1.346 3-3 3' }),
        React.createElement("path", { d: 'M27.333 5H27v-.333C27 4.3 26.7 4 26.333 4c-.366 0-.666.3-.666.667V5h-.334c-.366 0-.666.3-.666.667 0 .366.3.666.666.666h.334v.334c0 .366.3.666.666.666s.667-.3.667-.666v-.334h.333c.367 0 .667-.3.667-.666S27.7 5 27.333 5' }))));
exports.IllustrativeCryptoPairsIcon = IllustrativeCryptoPairsIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.IllustrativeCryptoPairsIcon);
exports.default = ForwardRef;
