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
exports.SocialYoutubeBrandIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const SocialYoutubeBrandIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: 'red', d: 'M31.34 8.303a4.01 4.01 0 0 0-2.82-2.82C26.016 4.797 16 4.797 16 4.797s-10.016 0-12.52.66C2.134 5.824 1.027 6.931.658 8.302 0 10.807 0 16 0 16s0 5.22.659 7.697a4.01 4.01 0 0 0 2.82 2.82c2.53.686 12.52.686 12.52.686s10.017 0 12.521-.66a4.01 4.01 0 0 0 2.82-2.82c.66-2.504.66-7.697.66-7.697s.026-5.219-.66-7.723' }),
    React.createElement("path", { fill: '#fff', d: 'M12.81 20.797 21.14 16l-8.33-4.797z' })));
exports.SocialYoutubeBrandIcon = SocialYoutubeBrandIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.SocialYoutubeBrandIcon);
exports.default = ForwardRef;
