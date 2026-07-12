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
exports.LegacyOhlcIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyOhlcIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#85ACB0', d: 'M7 2a1 1 0 0 1 1 1v2h3a1 1 0 0 1 .993.883L12 6a1 1 0 0 1-1 1H8v12a1 1 0 0 1-.883.993L7 20a1 1 0 0 1-1-1v-5H3a1 1 0 0 1-.993-.883L2 13a1 1 0 0 1 1-1h3V3a1 1 0 0 1 .883-.993z' }),
    React.createElement("path", { fill: '#FF444F', d: 'M17 5a1 1 0 0 1 1 1v12h3a1 1 0 0 1 .993.883L22 19a1 1 0 0 1-1 1h-3v1a1 1 0 0 1-.883.993L17 22a1 1 0 0 1-1-1v-9h-5a1 1 0 1 1 0-2h5V6a1 1 0 0 1 1-1' })));
exports.LegacyOhlcIcon = LegacyOhlcIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyOhlcIcon);
exports.default = ForwardRef;
