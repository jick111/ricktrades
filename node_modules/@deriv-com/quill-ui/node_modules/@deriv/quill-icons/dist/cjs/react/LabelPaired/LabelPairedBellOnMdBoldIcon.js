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
const LabelPairedBellOnMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10 4c.531 0 1 .469 1 1v.625c2.281.438 4 2.469 4 4.875v.813c0 1.406.469 2.78 1.344 3.906l.468.562c.188.25.22.563.094.813a.73.73 0 0 1-.656.406H3.75a.74.74 0 0 1-.687-.406.78.78 0 0 1 .093-.813l.469-.562C4.5 14.094 5 12.719 5 11.313V10.5c0-2.406 1.719-4.437 4-4.875V5c0-.531.438-1 1-1m0 3c-1.937 0-3.5 1.594-3.5 3.5v.813c0 1.5-.437 2.937-1.25 4.187h9.469c-.813-1.25-1.219-2.687-1.219-4.187V10.5C13.5 8.594 11.906 7 10 7m2 11c0 .531-.219 1.063-.594 1.438A1.96 1.96 0 0 1 10 20c-.531 0-1.062-.187-1.437-.562C8.187 19.063 8 18.53 8 18h4M0 10.25a.74.74 0 0 1 .75-.75h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75a.72.72 0 0 1-.75-.75m16.75-.75h2.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-2.5a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75m1.906-4.812a.74.74 0 0 1-.343 1l-2 1a.74.74 0 0 1-1-.344.74.74 0 0 1 .343-1l2-1a.74.74 0 0 1 1 .343m-17 1a.74.74 0 0 1-.343-1 .74.74 0 0 1 1-.344l2 1a.74.74 0 0 1 .343 1 .74.74 0 0 1-1 .343z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5125128b71c4c38a650b93add608c570__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBellOnMdBoldIcon);
exports.default = ForwardRef;
