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
exports.SocialTiktokWhiteIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const SocialTiktokWhiteIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', d: 'M25.785 6.414A7.67 7.67 0 0 1 22.299 0h-5.501l-.01 22.048a4.627 4.627 0 0 1-4.615 4.451 4.6 4.6 0 0 1-2.145-.531 4.63 4.63 0 0 1-2.48-4.093 4.63 4.63 0 0 1 4.625-4.625c.476 0 .932.078 1.365.214v-5.617c-.447-.06-.901-.098-1.365-.098-5.583 0-10.126 4.543-10.126 10.126 0 3.426 1.711 6.458 4.322 8.29A10.07 10.07 0 0 0 12.173 32c5.583 0 10.126-4.542 10.126-10.126v-11.18a13.1 13.1 0 0 0 7.655 2.461V7.653a7.6 7.6 0 0 1-4.168-1.24z' })));
exports.SocialTiktokWhiteIcon = SocialTiktokWhiteIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.SocialTiktokWhiteIcon);
exports.default = ForwardRef;
