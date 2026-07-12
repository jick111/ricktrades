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
const LabelPairedCloneCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 14.75h5.25c.398 0 .75-.328.75-.75v-1.5h.75V14c0 .844-.68 1.5-1.5 1.5H1.5A1.48 1.48 0 0 1 0 14V8.75c0-.82.656-1.5 1.5-1.5H3V8H1.5a.755.755 0 0 0-.75.75V14c0 .422.328.75.75.75M5.25 11h5.25c.398 0 .75-.328.75-.75V5a.77.77 0 0 0-.75-.75H5.25A.755.755 0 0 0 4.5 5v5.25c0 .422.328.75.75.75m-1.5-.75V5c0-.82.656-1.5 1.5-1.5h5.25c.82 0 1.5.68 1.5 1.5v5.25c0 .844-.68 1.5-1.5 1.5H5.25a1.48 1.48 0 0 1-1.5-1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a77edef138f2b1a23d4dffd3bc97adab__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCloneCaptionRegularIcon);
exports.default = ForwardRef;
