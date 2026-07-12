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
exports.MarketStocksWalmartIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketStocksWalmartIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#8b0a2f061d9ef8167f97160f26eb230e__a)' },
        React.createElement("path", { fill: '#337DBE', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: '#FDB71B', d: 'M16.615 12.221a.97.97 0 0 1-.617.137.96.96 0 0 1-1.018-.624l-.519-5.874c0-.583.68-1.06 1.537-1.06s1.537.477 1.537 1.06l-.52 5.874a.97.97 0 0 1-.4.487M13.013 13.594a.95.95 0 0 1-.194.603l.014-.007a.97.97 0 0 1-1.046.575l-5.361-2.49c-.506-.296-.569-1.159-.148-1.86s1.18-1.088 1.677-.8l4.829 3.389a.95.95 0 0 1 .229.59M19.177 14.19a.955.955 0 0 0 1.046.568l5.347-2.484c.506-.295.576-1.116.155-1.86s-1.186-1.087-1.685-.8l-4.828 3.39a.95.95 0 0 0 0 1.193zM16.615 19.836a.97.97 0 0 0-.617-.137.96.96 0 0 0-1.018.625l-.519 5.874c0 .582.702 1.06 1.537 1.06s1.537-.478 1.537-1.06l-.52-5.874a.97.97 0 0 0-.4-.488M19.177 17.867a.954.954 0 0 1 1.032-.568l5.347 2.484c.506.295.576 1.123.155 1.86s-1.186 1.088-1.685.8l-4.828-3.383a.96.96 0 0 1 0-1.2zM13.012 18.467a.96.96 0 0 0-.193-.607l.014.007a.954.954 0 0 0-1.046-.568l-5.361 2.484c-.506.295-.569 1.123-.148 1.86s1.18 1.088 1.677.8l4.829-3.383a.96.96 0 0 0 .228-.593' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8b0a2f061d9ef8167f97160f26eb230e__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.MarketStocksWalmartIcon = MarketStocksWalmartIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketStocksWalmartIcon);
exports.default = ForwardRef;
