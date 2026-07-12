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
exports.MarketDerivedGoldBasketIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketDerivedGoldBasketIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#0AA0B0', fillRule: 'evenodd', clipRule: 'evenodd' },
        React.createElement("path", { d: 'M17.515 4.857 21.8 12H27a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h5.2l4.286-7.143a1.766 1.766 0 0 1 3.029 0M13.185 12l2.729-4.605a.1.1 0 0 1 .172 0L18.815 12zM25.72 16a1 1 0 0 1 .97 1.242l-2.5 10a1 1 0 0 1-.97.758H8.78a1 1 0 0 1-.97-.758l-2.5-10A1 1 0 0 1 6.28 16zM10 20a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0zm6-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1m4 1a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0z' })),
    React.createElement("g", { clipPath: 'url(#9f32903ee9bf59014259294382c5c3fe__a)' },
        React.createElement("path", { fill: '#FFDA5B', d: 'M32 5a5 5 0 1 1-10 0 5 5 0 0 1 10 0' }),
        React.createElement("path", { fill: '#FDF1CA', d: 'M30.188 1.148a5 5 0 0 0-.695-.483l-6.828 6.828q.212.369.483.695zM24.413 9.28a5 5 0 0 1-.986-.782l7.07-7.07c.3.293.564.624.783.985zM25.874 9.873a5 5 0 0 1-.46-.13l6.33-6.33q.075.227.129.46z' }),
        React.createElement("path", { fill: '#FFC329', d: 'M31.063 5a4.062 4.062 0 1 1-8.125 0 4.062 4.062 0 0 1 8.125 0' }),
        React.createElement("path", { fill: '#F8B712', d: 'M27 9.063a4.062 4.062 0 0 0 3.589-5.968 8.07 8.07 0 0 0-5.494 5.494A4.05 4.05 0 0 0 27 9.062' }),
        React.createElement("path", { fill: '#DB9E43', d: 'M30.025 2.288a4.062 4.062 0 0 0-5.737 5.737 4.062 4.062 0 1 1 5.737-5.737' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9f32903ee9bf59014259294382c5c3fe__a' },
            React.createElement("path", { fill: '#fff', d: 'M22 0h10v10H22z' })))));
exports.MarketDerivedGoldBasketIcon = MarketDerivedGoldBasketIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketDerivedGoldBasketIcon);
exports.default = ForwardRef;
