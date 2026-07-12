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
exports.LegacyCandleIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyCandleIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#85ACB0', d: 'M3 16a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h2V3a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H7v3a1 1 0 1 1-2 0v-3z' }),
    React.createElement("path", { fill: '#FF444F', d: 'M18 2a1 1 0 0 1 1 1v4h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-.883.993L18 22a1 1 0 0 1-1-1v-2h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2V3a1 1 0 0 1 1-1' })));
exports.LegacyCandleIcon = LegacyCandleIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyCandleIcon);
exports.default = ForwardRef;
