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
const LabelPairedInfoCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 5, height: 18, viewBox: '0 0 5 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 5c0-.398.328-.75.75-.75.398 0 .75.352.75.75 0 .422-.352.75-.75.75A.74.74 0 0 1 1.75 5M.625 7.625c0-.187.164-.375.375-.375h1.5c.188 0 .375.188.375.375V14h1.5c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.625a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h1.5V8H1a.37.37 0 0 1-.375-.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0cbad704590a198b6471f8a7f33ae1c1__a' },
            React.createElement("path", { d: 'M0 0h5v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedInfoCaptionRegularIcon);
exports.default = ForwardRef;
