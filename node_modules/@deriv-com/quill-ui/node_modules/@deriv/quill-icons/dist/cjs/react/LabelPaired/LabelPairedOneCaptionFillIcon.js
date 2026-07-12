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
const LabelPairedOneCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 6, height: 18, viewBox: '0 0 6 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.75 5v8.25h1.5c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H.75A.74.74 0 0 1 0 14c0-.398.328-.75.75-.75h1.5V6.406l-1.102.727c-.328.234-.796.14-1.03-.211a.73.73 0 0 1 .21-1.031l2.25-1.5c.235-.164.516-.164.774-.047.234.14.398.398.398.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cdba5bb393cd336d65d3fb5a2be5d8ec__a' },
            React.createElement("path", { d: 'M0 0h6v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedOneCaptionFillIcon);
exports.default = ForwardRef;
