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
exports.StandaloneThreeFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneThreeFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M9.75 9c0-.664.547-1.25 1.25-1.25h9.375c.508 0 .977.352 1.133.82a1.21 1.21 0 0 1-.313 1.367l-5.117 4.688h.86a5.32 5.32 0 0 1 5.312 5.313 5.293 5.293 0 0 1-5.312 5.312h-3.086a4.42 4.42 0 0 1-3.907-2.383l-.078-.156a1.24 1.24 0 0 1 .547-1.68 1.24 1.24 0 0 1 1.68.547l.078.156c.312.625.976 1.016 1.68 1.016h3.085a2.826 2.826 0 0 0 2.813-2.812c0-1.524-1.29-2.813-2.812-2.813h-4.063a1.24 1.24 0 0 1-1.172-.781 1.21 1.21 0 0 1 .313-1.367l5.117-4.727H11c-.703 0-1.25-.547-1.25-1.25' })));
exports.StandaloneThreeFillIcon = StandaloneThreeFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneThreeFillIcon);
exports.default = ForwardRef;
