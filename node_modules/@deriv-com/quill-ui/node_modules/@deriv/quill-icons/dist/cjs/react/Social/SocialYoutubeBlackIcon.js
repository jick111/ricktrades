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
exports.SocialYoutubeBlackIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const SocialYoutubeBlackIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#000', fillRule: 'evenodd', d: 'M28.52 5.483a4.01 4.01 0 0 1 2.82 2.82c.686 2.504.66 7.723.66 7.723s0 5.193-.66 7.697a4.01 4.01 0 0 1-2.82 2.82c-2.504.66-12.52.66-12.52.66s-9.99 0-12.52-.686a4.01 4.01 0 0 1-2.821-2.82C0 21.219 0 16 0 16s0-5.193.659-7.697c.369-1.37 1.476-2.478 2.82-2.847C5.984 4.797 16 4.797 16 4.797s10.017 0 12.521.686M21.14 16l-8.33 4.797v-9.594z', clipRule: 'evenodd' })));
exports.SocialYoutubeBlackIcon = SocialYoutubeBlackIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.SocialYoutubeBlackIcon);
exports.default = ForwardRef;
