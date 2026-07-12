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
const LabelPairedPlaceholderCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.5 4.25h.75v1.5H2.5a.755.755 0 0 0-.75.75v.75H.25V6.5A2.25 2.25 0 0 1 2.5 4.25M.25 8h1.5v3H.25zm9 0h1.5v3h-1.5zm1.5-.75h-1.5V6.5a.77.77 0 0 0-.75-.75h-.75v-1.5h.75a2.25 2.25 0 0 1 2.25 2.25zm0 4.5v.75a2.25 2.25 0 0 1-2.25 2.25h-.75v-1.5h.75c.398 0 .75-.328.75-.75v-.75zm-9 0v.75c0 .422.328.75.75.75h.75v1.5H2.5A2.25 2.25 0 0 1 .25 12.5v-.75zm2.25 3v-1.5h3v1.5zm0-9v-1.5h3v1.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a831be81011bf212fa94ea35fd1d099c__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPlaceholderCaptionFillIcon);
exports.default = ForwardRef;
