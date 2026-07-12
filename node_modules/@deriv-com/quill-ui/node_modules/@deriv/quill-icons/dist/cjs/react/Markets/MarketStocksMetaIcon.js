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
exports.MarketStocksMetaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketStocksMetaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#eb8eaa246cfc3bc5eb378717bf8aaea1__a)' },
        React.createElement("path", { fill: '#F2F5F8', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: 'url(#eb8eaa246cfc3bc5eb378717bf8aaea1__b)', d: 'M20.353 9.355c-1.64 0-2.921 1.235-4.083 2.804-1.594-2.03-2.927-2.804-4.523-2.804C8.493 9.355 6 13.589 6 18.072c0 2.804 1.357 4.573 3.63 4.573 1.635 0 2.812-.77 4.903-4.427l1.472-2.6q.316.51.664 1.097l.98 1.65c1.91 3.196 2.975 4.28 4.905 4.28 2.214 0 3.446-1.793 3.446-4.655-.001-4.693-2.55-8.635-5.647-8.635m-7.416 7.873c-1.695 2.658-2.281 3.253-3.226 3.253-.972 0-1.55-.853-1.55-2.373 0-3.254 1.623-6.581 3.556-6.581 1.048 0 1.923.604 3.263 2.523-1.27 1.954-2.043 3.178-2.043 3.178m6.4-.335-1.171-1.955a41 41 0 0 0-.915-1.424c1.057-1.631 1.929-2.445 2.965-2.445 2.154 0 3.877 3.172 3.877 7.067 0 1.484-.486 2.347-1.494 2.347-.966-.002-1.427-.638-3.261-3.59' })),
    React.createElement("defs", null,
        React.createElement("linearGradient", { id: 'eb8eaa246cfc3bc5eb378717bf8aaea1__b', x1: 17.572, x2: 11.517, y1: 12.081, y2: 16.001, gradientUnits: 'userSpaceOnUse' },
            React.createElement("stop", { stopColor: '#0180F9' }),
            React.createElement("stop", { offset: 0.332, stopColor: '#0768E1' }),
            React.createElement("stop", { offset: 0.627, stopColor: '#0768E1' }),
            React.createElement("stop", { offset: 1, stopColor: '#0180F9' })),
        React.createElement("clipPath", { id: 'eb8eaa246cfc3bc5eb378717bf8aaea1__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.MarketStocksMetaIcon = MarketStocksMetaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketStocksMetaIcon);
exports.default = ForwardRef;
