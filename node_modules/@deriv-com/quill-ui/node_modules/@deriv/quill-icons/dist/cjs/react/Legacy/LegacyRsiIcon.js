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
exports.LegacyRsiIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyRsiIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#85ACB0', d: 'm8.236 4 2.8 10.263A1 1 0 0 0 12 15h5.34l2.74 6.394a1 1 0 1 0 1.84-.788l-3-7A1 1 0 0 0 18 13h-5.236l-2.8-10.263A1 1 0 0 0 9 2H3a1 1 0 0 0 0 2z' }),
    React.createElement("path", { fill: '#D6DADB', d: 'M6 6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm15 0a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2z' }),
    React.createElement("path", { fill: '#FF444F', d: 'M3 20h13a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2' })));
exports.LegacyRsiIcon = LegacyRsiIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyRsiIcon);
exports.default = ForwardRef;
