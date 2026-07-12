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
exports.LegacyAccumulatorIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyAccumulatorIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333', clipPath: 'url(#17fd96b71d35378a90d36b7216d18316__a)' },
        React.createElement("path", { d: 'M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 .403.204l5.628 7.674 2.692-1.794a.5.5 0 0 1 .63.062L13.708 8H15.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.354-.146l-1.71-1.71-2.313 1.542 2.544 3.469.62.845 1.466 2H15.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.403-.204L8.29 9.24l-2.513 1.675A.5.5 0 0 1 5.1 10.8L2.25 7H.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .4.2l2.716 3.622 2.082-1.388-3.365-4.588L3.713 3 2.247 1H.5A.5.5 0 0 1 0 .5' }),
        React.createElement("path", { d: 'M0 3h1.417v1H0zM2.917 3h1.416v1H2.917zM5.833 3H7.25v1H5.833zM8.75 3h1.417v1H8.75zM11.667 3h1.416v1h-1.416zM14.583 3H16v1h-1.417zM0 12h1.417v1H0zM2.917 12h1.416v1H2.917zM5.833 12H7.25v1H5.833zM8.75 12h1.417v1H8.75zM11.667 12h1.416v1h-1.416v-1M14.583 12H16v1h-1.417z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '17fd96b71d35378a90d36b7216d18316__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyAccumulatorIcon = LegacyAccumulatorIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyAccumulatorIcon);
exports.default = ForwardRef;
