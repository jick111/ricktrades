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
exports.SocialGoogleWhiteIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const SocialGoogleWhiteIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#1f6a39830131a1603eeb539ed80e5780__a)' },
        React.createElement("path", { fill: '#fff', d: 'M1.733 8.819c2.77-5.404 8.42-8.82 14.594-8.82 4.402 0 8.099 1.583 10.924 4.163l-4.687 4.594c-1.688-1.582-3.843-2.392-6.237-2.392-4.256 0-7.852 2.814-9.137 6.6a9.35 9.35 0 0 0 0 6.082l.001-.002c1.284 3.785 4.88 6.6 9.136 6.6 2.201 0 4.072-.567 5.53-1.53l.18.137-.182-.138a7.34 7.34 0 0 0 3.256-4.828h-8.787V13.1h15.382c.193 1.078.294 2.175.294 3.272 0 4.873-1.78 8.972-4.87 11.76l-.004-.003c-2.696 2.443-6.39 3.87-10.8 3.87-6.17.01-11.82-3.406-14.59-8.807l-.003.002a15.77 15.77 0 0 1 0-14.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1f6a39830131a1603eeb539ed80e5780__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.SocialGoogleWhiteIcon = SocialGoogleWhiteIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.SocialGoogleWhiteIcon);
exports.default = ForwardRef;
