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
exports.CurrencyUsdtIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const CurrencyUsdtIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#53AE94', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
    React.createElement("path", { fill: '#fff', d: 'M17.975 13.868v-2.38h5.443V7.861H8.596v3.627h5.444v2.378c-4.424.203-7.75 1.08-7.75 2.13s3.328 1.925 7.75 2.13v7.623h3.936v-7.624c4.416-.204 7.736-1.08 7.736-2.128s-3.32-1.924-7.736-2.128zm.001 3.611v-.002c-.111.007-.682.041-1.952.041-1.016 0-1.73-.028-1.982-.041v.003c-3.909-.173-6.826-.854-6.826-1.668 0-.815 2.918-1.495 6.826-1.668v2.658c.256.017.988.06 1.999.06 1.213 0 1.824-.05 1.936-.06v-2.658c3.9.174 6.811.855 6.811 1.667 0 .811-2.913 1.492-6.812 1.666' })));
exports.CurrencyUsdtIcon = CurrencyUsdtIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.CurrencyUsdtIcon);
exports.default = ForwardRef;
