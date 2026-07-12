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
const LabelPairedTwoCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.695 5.375c-.632 0-1.218.258-1.664.703l-.82.82c-.234.235-.586.235-.797 0a.513.513 0 0 1 0-.773l.82-.844A3.5 3.5 0 0 1 3.695 4.25h.164a3.34 3.34 0 0 1 3.329 3.328c0 .914-.399 1.781-1.055 2.414l-3.914 3.633h4.969a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H.813a.59.59 0 0 1-.54-.352.59.59 0 0 1 .141-.609L5.36 9.172a2.22 2.22 0 0 0 .704-1.594 2.2 2.2 0 0 0-2.204-2.203z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e5a8b06ec34ce87702f900146b0dd489__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTwoCaptionBoldIcon);
exports.default = ForwardRef;
