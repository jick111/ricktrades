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
const LabelPairedExpandCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1 4.25h2.25c.398 0 .75.352.75.75 0 .422-.352.75-.75.75h-1.5v1.5c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V5c0-.398.328-.75.75-.75m.75 7.5v1.5h1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1A.74.74 0 0 1 .25 14v-2.25c0-.398.328-.75.75-.75.398 0 .75.352.75.75m6-7.5H10c.398 0 .75.352.75.75v2.25c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75v-1.5h-1.5A.74.74 0 0 1 7 5c0-.398.328-.75.75-.75m3 7.5V14c0 .422-.352.75-.75.75H7.75A.74.74 0 0 1 7 14c0-.398.328-.75.75-.75h1.5v-1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '48e90fbc5d7b6262e257724e9056cd63__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExpandCaptionFillIcon);
exports.default = ForwardRef;
