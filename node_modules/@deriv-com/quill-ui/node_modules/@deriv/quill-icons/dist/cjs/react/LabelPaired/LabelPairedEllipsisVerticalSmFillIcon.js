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
const LabelPairedEllipsisVerticalSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 4, height: 22, viewBox: '0 0 4 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 13.594a1.531 1.531 0 0 1 1.313 2.297A1.47 1.47 0 0 1 2 16.656c-.574 0-1.066-.273-1.34-.765A1.531 1.531 0 0 1 2 13.594m0-4.375a1.531 1.531 0 0 1 1.313 2.297A1.47 1.47 0 0 1 2 12.28c-.574 0-1.066-.273-1.34-.765A1.531 1.531 0 0 1 2 9.219m1.531-2.844a1.531 1.531 0 0 1-2.297 1.34C.742 7.44.47 6.949.47 6.375c0-.547.273-1.04.765-1.312a1.53 1.53 0 0 1 2.297 1.312' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8b1d176eea0f90acbd96dd0abda810ef__a' },
            React.createElement("path", { d: 'M0 0h4v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEllipsisVerticalSmFillIcon);
exports.default = ForwardRef;
