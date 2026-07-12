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
exports.LegacyAdxIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyAdxIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#85ACB0', d: 'M20.419 15.186a1 1 0 1 1 1.162 1.628l-7 5a1 1 0 0 1-1.221-.046L8.06 17.353l-4.354 4.354a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.347-.061l5.407 4.506zM7.293 2.293a1 1 0 0 1 1.466.056l5.297 6.18 6.237-6.236a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.466-.056L7.944 4.47 3.707 8.707a1 1 0 0 1-1.414-1.414z' }),
    React.createElement("path", { fill: '#D6DADB', d: 'M3 14h18a1 1 0 1 0 0-2H3a1 1 0 1 0 0 2' })));
exports.LegacyAdxIcon = LegacyAdxIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyAdxIcon);
exports.default = ForwardRef;
