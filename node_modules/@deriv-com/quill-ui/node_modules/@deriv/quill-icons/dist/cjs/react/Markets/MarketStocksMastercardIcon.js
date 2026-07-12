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
exports.MarketStocksMastercardIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const MarketStocksMastercardIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#b1e63a984eb419c1e191837bc08f0abd__a)' },
        React.createElement("path", { fill: '#F6F7F8', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
        React.createElement("path", { fill: '#EB001B', d: 'M19 16a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0' }),
        React.createElement("path", { fill: '#F79E1B', d: 'M28 16a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0' }),
        React.createElement("path", { fill: '#FF5F00', d: 'M16 22a7.49 7.49 0 0 0 3-6 7.49 7.49 0 0 0-3-6 7.49 7.49 0 0 0-3 6 7.49 7.49 0 0 0 3 6' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b1e63a984eb419c1e191837bc08f0abd__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h32v32H0z' })))));
exports.MarketStocksMastercardIcon = MarketStocksMastercardIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.MarketStocksMastercardIcon);
exports.default = ForwardRef;
