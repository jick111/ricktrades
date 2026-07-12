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
const LabelPairedStarXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm14.813 6.844 3.046 6.234 6.703.985a1.53 1.53 0 0 1 1.22 1.03 1.39 1.39 0 0 1-.376 1.5l-4.875 4.829 1.172 6.844a1.47 1.47 0 0 1-.61 1.453c-.468.375-1.077.375-1.593.14l-6-3.234-6.047 3.234c-.469.235-1.078.235-1.547-.14a1.47 1.47 0 0 1-.61-1.453l1.126-6.844-4.875-4.828c-.375-.375-.516-.985-.375-1.5a1.53 1.53 0 0 1 1.219-1.031l6.75-.985 3-6.234C12.375 6.328 12.89 6 13.5 6c.563 0 1.078.328 1.313.844' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'abcecf9e915f8f19346e35dbcc064b1e__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedStarXlFillIcon);
exports.default = ForwardRef;
