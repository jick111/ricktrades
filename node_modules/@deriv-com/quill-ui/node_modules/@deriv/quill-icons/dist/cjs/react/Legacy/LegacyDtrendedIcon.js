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
exports.LegacyDtrendedIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyDtrendedIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#85ACB0', d: 'm5.38 8.64 1.65 6.602c.216.865 1.37 1.036 1.827.272l1.882-3.135 2.312 6.937c.304.912 1.594.912 1.898 0l2.396-7.19L19.2 14.6c.55.733 1.713.403 1.796-.51l1-11a1 1 0 0 0-1.992-.18l-.764 8.41L17.8 9.4a1 1 0 0 0-1.749.284L14 15.838l-2.051-6.154a1 1 0 0 0-1.806-.198l-1.758 2.93L5.97 2.756c-.27-1.081-1.84-.976-1.964.133l-2 18a1 1 0 1 0 1.988.22z' })));
exports.LegacyDtrendedIcon = LegacyDtrendedIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyDtrendedIcon);
exports.default = ForwardRef;
