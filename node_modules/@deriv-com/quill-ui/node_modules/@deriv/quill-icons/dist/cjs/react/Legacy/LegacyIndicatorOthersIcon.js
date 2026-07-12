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
exports.LegacyIndicatorOthersIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyIndicatorOthersIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M6.814 7.076a.5.5 0 0 1 .652.644l-2.5 6.46a.5.5 0 0 1-.932 0l-2.5-6.46a.5.5 0 0 1 .652-.644L4.5 8zM6.12 8.43l-1.433.573a.5.5 0 0 1-.372 0l-1.433-.573L4.5 12.615zm4.91-6.6a.5.5 0 0 1 .942 0l2.5 7a.5.5 0 0 1-.67.628L11.5 8.465l-2.302.994a.5.5 0 0 1-.669-.627zm.471 1.656L9.858 8.085l1.444-.624a.5.5 0 0 1 .396 0l1.444.624z' })));
exports.LegacyIndicatorOthersIcon = LegacyIndicatorOthersIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyIndicatorOthersIcon);
exports.default = ForwardRef;
