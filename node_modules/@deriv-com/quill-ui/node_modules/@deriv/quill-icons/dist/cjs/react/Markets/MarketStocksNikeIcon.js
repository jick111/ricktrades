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
exports.MarketStocksNikeIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketStocksNikeIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#2630d2dab678602a24608a927b28c3eb__a)' },
        React.createElement("path", { fill: '#000', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M7.077 12.382c-1.575 1.837-3.074 4.11-3.074 5.811a2 2 0 0 0 .69 1.62 3.33 3.33 0 0 0 2.25.825 8.7 8.7 0 0 0 3.133-.81c1.5-.585 17.824-7.686 17.824-7.686.157-.082.127-.18-.075-.127L10 16.836c-.334.095-.68.143-1.027.143-1.365 0-2.572-.75-2.564-2.34a5.25 5.25 0 0 1 .637-2.25z', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2630d2dab678602a24608a927b28c3eb__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.MarketStocksNikeIcon = MarketStocksNikeIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketStocksNikeIcon);
exports.default = ForwardRef;
