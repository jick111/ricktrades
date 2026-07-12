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
const LabelPairedLightbulbCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.375 12.5h-3.75c-.234-.727-.703-1.383-1.172-2.016l-.351-.492a4.1 4.1 0 0 1-.727-2.367A4.116 4.116 0 0 1 4.5 3.5c2.273 0 4.125 1.852 4.125 4.148 0 .868-.281 1.665-.75 2.344l-.352.492c-.468.633-.937 1.29-1.148 2.016m-1.875 3a1.85 1.85 0 0 1-1.875-1.875v-.375h3.75v.375A1.866 1.866 0 0 1 4.5 15.5M2.625 7.625c0-1.031.82-1.875 1.875-1.875a.385.385 0 0 0 .375-.375A.4.4 0 0 0 4.5 5a2.636 2.636 0 0 0-2.625 2.625c0 .21.164.375.375.375a.385.385 0 0 0 .375-.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1ef8ef3bac7c8a02cc0a1f5845a2eae6__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLightbulbCaptionFillIcon);
exports.default = ForwardRef;
