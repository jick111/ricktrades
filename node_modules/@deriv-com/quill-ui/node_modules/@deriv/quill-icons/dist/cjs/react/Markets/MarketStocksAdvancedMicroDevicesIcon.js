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
exports.MarketStocksAdvancedMicroDevicesIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketStocksAdvancedMicroDevicesIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#99d3bbd14725b3095d1edac4361755e9__a)' },
        React.createElement("path", { fill: '#221F20', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: '#fff', d: 'M22.587 12.835H29v6.331L27.034 17.2v-2.546h-2.587zM22.653 16.491V19h2.437l1.7-1.797h-2.339v-2.355z' }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M7.694 18.647h1.452L6.743 13.24H5.181L3 18.647h1.428l.404-1.07H7.25zm-2.506-2.016.793-2.097.873 2.097z', clipRule: 'evenodd' }),
        React.createElement("path", { fill: '#fff', d: 'M14.354 13.24h1.173v5.407H14.18V15.27l-1.46 1.697h-.205l-1.458-1.697v3.377H9.708V13.24h1.173l1.736 2.005z' }),
        React.createElement("path", { fill: '#fff', fillRule: 'evenodd', d: 'M21.758 15.953c0-1.484-1.014-2.713-2.988-2.713h-2.388v5.407h2.237c2.16 0 3.14-1.14 3.14-2.694m-3.15 1.704h-.881v-3.426h.866c1.275 0 1.775.785 1.775 1.713 0 .793-.405 1.713-1.76 1.713', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '99d3bbd14725b3095d1edac4361755e9__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.MarketStocksAdvancedMicroDevicesIcon = MarketStocksAdvancedMicroDevicesIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketStocksAdvancedMicroDevicesIcon);
exports.default = ForwardRef;
