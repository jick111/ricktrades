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
exports.LegacySave2pxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacySave2pxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', fillRule: 'evenodd', d: 'M1 4a3 3 0 0 1 3-3h6.172a3 3 0 0 1 2.12.879l1.83 1.828A3 3 0 0 1 15 5.828V12a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3a1 1 0 0 0 1-1V5.828a1 1 0 0 0-.293-.707L11 3.414V5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2 0v2h3V3zm4 10v-3H6v3z', clipRule: 'evenodd' })));
exports.LegacySave2pxIcon = LegacySave2pxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacySave2pxIcon);
exports.default = ForwardRef;
