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
const LabelPairedArrowUpFromSquareCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm6.258 3.617 2.437 2.438c.14.14.14.398 0 .539a.397.397 0 0 1-.539 0L6.375 4.789V11c0 .21-.187.375-.375.375A.37.37 0 0 1 5.625 11V4.79L3.82 6.593a.397.397 0 0 1-.539 0 .397.397 0 0 1 0-.54L5.72 3.618c.14-.14.398-.14.539 0M1.5 4.25h.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H1.5a.755.755 0 0 0-.75.75V14c0 .422.328.75.75.75h9c.398 0 .75-.328.75-.75V5.75A.77.77 0 0 0 10.5 5h-.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.75c.82 0 1.5.68 1.5 1.5V14c0 .844-.68 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 0 14V5.75c0-.82.656-1.5 1.5-1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '02bc3458518d497ca6adf81c86d1b2a5__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpFromSquareCaptionRegularIcon);
exports.default = ForwardRef;
