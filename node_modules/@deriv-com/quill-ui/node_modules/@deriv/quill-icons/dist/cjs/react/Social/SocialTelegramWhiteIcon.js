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
exports.SocialTelegramWhiteIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const SocialTelegramWhiteIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16m-15.426-4.189q-2.335.971-9.331 4.02-1.136.451-1.19.884c-.062.486.548.678 1.378.94l.35.11c.817.266 1.916.577 2.488.59q.777.016 1.735-.642 6.536-4.412 6.749-4.46c.1-.023.237-.052.33.032s.085.24.075.283c-.06.257-2.454 2.482-3.692 3.634-.386.359-.66.613-.716.672q-.19.194-.377.372c-.758.731-1.328 1.28.032 2.176.653.43 1.176.787 1.698 1.142.57.388 1.137.774 1.873 1.256q.28.186.54.375c.663.473 1.259.897 1.994.83.428-.04.87-.442 1.094-1.641.53-2.834 1.572-8.973 1.813-11.503a2.8 2.8 0 0 0-.027-.63.67.67 0 0 0-.228-.433c-.192-.156-.488-.189-.62-.186-.602.01-1.525.331-5.969 2.18', clipRule: 'evenodd' })));
exports.SocialTelegramWhiteIcon = SocialTelegramWhiteIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.SocialTelegramWhiteIcon);
exports.default = ForwardRef;
