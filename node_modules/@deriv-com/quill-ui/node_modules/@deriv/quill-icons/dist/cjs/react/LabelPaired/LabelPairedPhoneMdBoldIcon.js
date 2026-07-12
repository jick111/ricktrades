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
const LabelPairedPhoneMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm11.719 12.625 3.5 1.5c.562.219.875.813.75 1.406l-.75 3.5c-.125.563-.656 1-1.219 1-.219 0-.406-.031-.594-.031-.312 0-.625-.031-.906-.062A14 14 0 0 1 0 6c0-.562.406-1.094.969-1.219l3.5-.75a1.23 1.23 0 0 1 1.406.75l1.5 3.5c.219.5.094 1.094-.344 1.438L5.75 10.78a9.7 9.7 0 0 0 3.469 3.469l1.062-1.281a1.206 1.206 0 0 1 1.438-.344M13.78 18.5l.656-3.094-3.124-1.344-.907 1.126a1.53 1.53 0 0 1-1.937.343 11.15 11.15 0 0 1-4-4 1.53 1.53 0 0 1 .343-1.937l1.125-.906-1.343-3.126L1.5 6.22A12.447 12.447 0 0 0 13.781 18.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '365d56fbd402dcbe59bc9411217251c9__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPhoneMdBoldIcon);
exports.default = ForwardRef;
