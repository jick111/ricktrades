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
const LabelPairedFileLinesCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 3.5h3.75v3c0 .422.328.75.75.75h3V14c0 .844-.68 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5m4.5 0 3 3H6zm-3.375 6a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h3.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375zm0 1.5a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h3.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375zm0 1.5a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h3.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f59262e3bcfac79ac7022be7dcd1ab0d__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileLinesCaptionFillIcon);
exports.default = ForwardRef;
