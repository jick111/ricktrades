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
exports.LegacyZigZagIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyZigZagIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#FF444F', d: 'm5.064 2.649-3 8a1 1 0 0 0 1.872.702l3-8a1 1 0 0 0-1.872-.702' }),
    React.createElement("path", { fill: '#85ACB0', d: 'm18.832 20.445-12-18a1 1 0 0 0-1.664 1.11l12 18a1 1 0 0 0 1.664-1.11' }),
    React.createElement("path", { fill: '#FF444F', d: 'm20.143 15.486-3 5a1 1 0 0 0 1.715 1.029l3-5a1 1 0 0 0-1.716-1.03' })));
exports.LegacyZigZagIcon = LegacyZigZagIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyZigZagIcon);
exports.default = ForwardRef;
