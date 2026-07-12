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
exports.CurrencyDemoIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const CurrencyDemoIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#85ACB0', d: 'M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16' }),
    React.createElement("path", { fill: '#fff', d: 'M17.535 6C22.665 6 27 10.743 27 16s-4.336 10-9.465 10H9a1 1 0 1 1 0-2h2v-4H9a1 1 0 0 1-.993-.883L8 19a1 1 0 0 1 1-1h2v-4H9a1 1 0 0 1-.993-.883L8 13a1 1 0 0 1 1-1h2V8H9a1 1 0 0 1-.993-.883L8 7a1 1 0 0 1 1-1zm0 2H13v4h4a1 1 0 0 1 .993.883L18 13a1 1 0 0 1-1 1h-4v4h4a1 1 0 0 1 .993.883L18 19a1 1 0 0 1-1 1h-4v4h4.535c3.906 0 7.33-3.665 7.461-7.759L25 16c0-4.19-3.483-8-7.465-8' })));
exports.CurrencyDemoIcon = CurrencyDemoIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.CurrencyDemoIcon);
exports.default = ForwardRef;
