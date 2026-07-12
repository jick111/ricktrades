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
exports.LegacyMarketBasketIndicesIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyMarketBasketIndicesIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M8 1a.5.5 0 0 1 .41.213L11.76 6h3.74a.5.5 0 0 1 0 1h-.585l-1.424 7.592A.5.5 0 0 1 13 15H3a.5.5 0 0 1-.491-.408L1.085 7H.5a.5.5 0 0 1 0-1h3.74l3.35-4.787A.5.5 0 0 1 8 1M4.493 7h9.404l-1.312 7h-9.17L2.102 7zm6.047-1H5.46L8 2.372zM5.5 8a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5M8 8a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4A.5.5 0 0 1 8 8m2.5 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5', clipRule: 'evenodd' })));
exports.LegacyMarketBasketIndicesIcon = LegacyMarketBasketIndicesIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyMarketBasketIndicesIcon);
exports.default = ForwardRef;
