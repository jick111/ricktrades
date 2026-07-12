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
const LabelPairedQrcodeMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.5 6.5h-3v3h3zM1.5 5h3C5.313 5 6 5.688 6 6.5v3A1.5 1.5 0 0 1 4.5 11h-3A1.48 1.48 0 0 1 0 9.5v-3A1.5 1.5 0 0 1 1.5 5m3 9.5h-3v3h3zm-3-1.5h3c.813 0 1.5.688 1.5 1.5v3A1.5 1.5 0 0 1 4.5 19h-3A1.48 1.48 0 0 1 0 17.5v-3A1.5 1.5 0 0 1 1.5 13m8-6.5v3h3v-3zM8 6.5A1.5 1.5 0 0 1 9.5 5h3c.813 0 1.5.688 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 8 9.5zM2.25 7.75c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zm.5 7.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5v-.5c0-.25.219-.5.5-.5m7.5-7.5c0-.25.219-.5.5-.5h.5c.25 0 .5.25.5.5v.5c0 .281-.25.5-.5.5h-.5a.494.494 0 0 1-.5-.5zM8 13.5c0-.25.219-.5.5-.5h2c.25 0 .5.25.5.5 0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5 0-.25.219-.5.5-.5.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5h-2a.494.494 0 0 1-.5-.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v2c0 .281-.25.5-.5.5h-1a.494.494 0 0 1-.5-.5zm3.5 4.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5m2 0c.25 0 .5.25.5.5 0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2b533b7a0e9d1c5a086ad34dbf2610d6__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedQrcodeMdBoldIcon);
exports.default = ForwardRef;
