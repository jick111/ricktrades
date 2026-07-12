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
const LabelPairedStopwatchXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.25 6h4.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H12v1.64c1.734.282 3.328.985 4.64 2.063l1.032-.984a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11l-1.126 1.124c.985 1.547 1.594 3.375 1.594 5.297 0 5.39-4.406 9.75-9.75 9.75-5.39 0-9.75-4.36-9.75-9.75A9.7 9.7 0 0 1 9 10.64V9h-.75a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5m3.375 9a1.14 1.14 0 0 0-1.125-1.125A1.11 1.11 0 0 0 9.375 15v6c0 .656.469 1.125 1.125 1.125A1.11 1.11 0 0 0 11.625 21z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '99e18ced57b5b63240fec2bad875cb35__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedStopwatchXlFillIcon);
exports.default = ForwardRef;
