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
const LabelPairedArrowRotateLeftXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.86 13.5h2.39c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-6A1.48 1.48 0 0 1 .75 15V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v2.438l.797-.844a10.553 10.553 0 0 1 14.86 0 10.553 10.553 0 0 1 0 14.86 10.553 10.553 0 0 1-14.86 0c-.563-.61-.563-1.548 0-2.11.61-.61 1.547-.61 2.11 0a7.583 7.583 0 0 0 10.64 0 7.583 7.583 0 0 0 0-10.64 7.583 7.583 0 0 0-10.64 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '899cfb5c8ca236cf0805ca59c6db2bd4__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRotateLeftXlFillIcon);
exports.default = ForwardRef;
