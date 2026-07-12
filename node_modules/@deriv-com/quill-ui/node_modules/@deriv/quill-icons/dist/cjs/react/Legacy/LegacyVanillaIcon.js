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
exports.LegacyVanillaIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyVanillaIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { fill: '#333' },
        React.createElement("path", { fillRule: 'evenodd', d: 'M12.053 1.276A.5.5 0 0 1 12.5 1h3a.5.5 0 0 1 0 1h-2.691L6.447 14.724a.5.5 0 0 1-.888.012L2.227 8.5H.5a.5.5 0 0 1 0-1h2.026a.5.5 0 0 1 .441.264l3.018 5.648z', clipRule: 'evenodd' }),
        React.createElement("path", { d: 'M11 7.5h4.5a.5.5 0 0 1 0 1h-5zM4 7.5h4l-.5 1h-3z' }))));
exports.LegacyVanillaIcon = LegacyVanillaIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyVanillaIcon);
exports.default = ForwardRef;
