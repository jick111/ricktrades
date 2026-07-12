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
const LabelPairedEuroSignMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 11.5H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h1.031A7 7 0 0 1 8.5 5h.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H8.5A5.5 5.5 0 0 0 3.375 10H8.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H3v1h5.25a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H3.375c.781 2.063 2.781 3.5 5.125 3.5h.75a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H8.5c-3.187 0-5.875-2.094-6.719-5H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h.75v-1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a83fd9ba7cbdd04c6c19b72ea90276cd__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEuroSignMdBoldIcon);
exports.default = ForwardRef;
