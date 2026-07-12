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
const LabelPairedComputerMouseScrollwheelCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.25 11.75v-4.5c0-1.64-1.36-3-3-3h-1.5c-1.664 0-3 1.36-3 3v4.5c0 1.664 1.336 3 3 3h1.5c1.64 0 3-1.336 3-3M0 7.25A3.746 3.746 0 0 1 3.75 3.5h1.5A3.76 3.76 0 0 1 9 7.25v4.5a3.746 3.746 0 0 1-3.75 3.75h-1.5A3.73 3.73 0 0 1 0 11.75zm4.875-1.125v1.5c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-1.5c0-.187.164-.375.375-.375.188 0 .375.188.375.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd024a06b6b9834d21683a4e536550482__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedComputerMouseScrollwheelCaptionRegularIcon);
exports.default = ForwardRef;
