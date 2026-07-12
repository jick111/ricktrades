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
const LabelPairedLocationCrosshairsSlashMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.188 4.188 5.75 7.75c.938-.906 2.125-1.531 3.5-1.687V4.75A.74.74 0 0 1 10 4a.76.76 0 0 1 .75.75v1.313a6.034 6.034 0 0 1 5.188 5.187h1.312A.76.76 0 0 1 18 12a.74.74 0 0 1-.75.75h-1.312a5.5 5.5 0 0 1-.813 2.344l4.563 3.594c.343.25.406.718.125 1.03-.25.345-.72.407-1.032.126l-18.5-14.5c-.343-.25-.406-.719-.125-1.032.25-.343.719-.406 1.032-.125m5.78 4.5 1.188.937A3.1 3.1 0 0 1 10 9a3 3 0 0 1 3 3c0 .438-.094.844-.25 1.219l1.188.937A4.5 4.5 0 0 0 14.5 12c0-2.469-2.031-4.5-4.5-4.5-1.187 0-2.25.469-3.031 1.188m4.5 3.53V12a1.5 1.5 0 0 0-1.5-1.5c-.187 0-.374.063-.53.125zm.188 3.97 1.281 1.03a5.4 5.4 0 0 1-2.187.75v1.282A.74.74 0 0 1 10 20a.72.72 0 0 1-.75-.75v-1.281c-2.719-.344-4.875-2.5-5.219-5.188H2.75a.74.74 0 0 1-.75-.75c0-.437.313-.75.75-.75h1.281a4.5 4.5 0 0 1 .188-.937l1.312 1.031c-.031.219-.031.438-.031.625 0 2.5 2 4.5 4.5 4.5.563 0 1.125-.094 1.656-.312' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fce562ec7c9e91146d2a98125b139d43__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLocationCrosshairsSlashMdBoldIcon);
exports.default = ForwardRef;
