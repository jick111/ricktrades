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
const LabelPairedTakeProfitLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.336 21.398v-8.437h2.812V9.68h-9.18v3.28h2.813v8.438zM12.46 9.68h5.586a4.1 4.1 0 0 1 1.562.312c.47.195.86.469 1.211.82.352.352.586.782.782 1.29.156.468.234 1.015.234 1.562a5 5 0 0 1-.234 1.563c-.196.507-.43.898-.782 1.289a3.7 3.7 0 0 1-1.21.82c-.47.195-1.016.273-1.563.273h-2.031v3.79H12.46zM18.125 13c-.04-.04-.117-.078-.352-.078h-1.757v1.484h1.757c.235 0 .352-.078.391-.117s.078-.078.078-.312v-.665c0-.195-.039-.273-.078-.273z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd3a7c0ef46cfa42b9323d02ab6ebf6fe__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTakeProfitLgFillIcon);
exports.default = ForwardRef;
