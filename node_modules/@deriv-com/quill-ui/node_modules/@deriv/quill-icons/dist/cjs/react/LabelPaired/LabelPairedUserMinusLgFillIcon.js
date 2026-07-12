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
const React = __importStar(require("react"));
const react_1 = require("react");
const LabelPairedUserMinusLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.75 10.5c0-1.758.938-3.398 2.5-4.297 1.523-.898 3.438-.898 5 0 1.523.899 2.5 2.54 2.5 4.297 0 1.797-.977 3.438-2.5 4.336-1.562.898-3.477.898-5 0a4.97 4.97 0 0 1-2.5-4.336M0 24.367c0-3.867 3.086-6.992 6.953-6.992h3.555a6.985 6.985 0 0 1 6.992 6.992c0 .625-.547 1.133-1.172 1.133H1.133A1.134 1.134 0 0 1 0 24.367m18.438-11.054h5.625a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938h-5.625c-.547 0-.938-.391-.938-.938 0-.508.39-.937.938-.937' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1a0e15a7a2437a7fd0e236d4d71ed964__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUserMinusLgFillIcon);
exports.default = ForwardRef;
