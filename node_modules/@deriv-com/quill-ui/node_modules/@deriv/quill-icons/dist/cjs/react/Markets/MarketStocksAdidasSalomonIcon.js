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
exports.MarketStocksAdidasSalomonIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketStocksAdidasSalomonIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#908ef01a392c7db80e2e3ee12ddb5c93__a)' },
        React.createElement("path", { fill: '#F6F7F8', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: '#246CB3', fillRule: 'evenodd', d: 'm21.123 6.25 6.462 7.113a1.934 1.934 0 0 1-.104 2.517c-1.117 1.229-4.288 4.618-4.288 4.618s-6.09-4.239-2.07-14.248', clipRule: 'evenodd' }),
        React.createElement("path", { fill: '#010101', fillRule: 'evenodd', d: 'm17.588 4.355 2.694 2.996-1.624 3.516c-1.943 4.844-.212 6.417-.212 6.417l3.794 5.385s-3.688 3.427-5.312 4.784c-1.343 1.194-2.209.052-2.209.052l-.705-.742s1.404-7.18 1.783-9.027a3.24 3.24 0 0 0-.486-2.826l-5.07-5.496s4.266-3.969 5.184-4.948 2.163-.111 2.163-.111m-1.236 6.038c.098.867-.22 1.58-.76 1.683-.485.06-1.024-.593-1.13-1.409s.273-1.506.759-1.632 1.032.49 1.13 1.358', clipRule: 'evenodd' }),
        React.createElement("path", { fill: '#CF4138', fillRule: 'evenodd', d: 'm9.15 9.25-4.677 4.207a2.055 2.055 0 0 0 .051 2.686c1.155 1.492 7.009 8.855 7.009 8.855s4.551-7.93-2.383-15.749', clipRule: 'evenodd' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '908ef01a392c7db80e2e3ee12ddb5c93__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.MarketStocksAdidasSalomonIcon = MarketStocksAdidasSalomonIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketStocksAdidasSalomonIcon);
exports.default = ForwardRef;
