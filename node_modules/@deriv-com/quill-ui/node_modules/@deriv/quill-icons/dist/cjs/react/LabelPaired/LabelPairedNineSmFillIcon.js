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
const LabelPairedNineSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 9c0 .957.492 1.805 1.313 2.297a2.65 2.65 0 0 0 2.625 0c.792-.492 1.312-1.34 1.312-2.297 0-.93-.52-1.777-1.312-2.27a2.65 2.65 0 0 0-2.625 0c-.82.493-1.313 1.34-1.313 2.27m2.379 4.375C1.957 13.265.125 11.352.125 9A4.37 4.37 0 0 1 4.5 4.625 4.39 4.39 0 0 1 8.875 9c0 .082-.027.164-.027.219-.028.984-.41 1.914-1.04 2.68l-3.964 4.675c-.301.383-.875.41-1.23.11-.384-.301-.41-.875-.11-1.23z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c4ed347056cb19b71e0b36b6e8351e74__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedNineSmFillIcon);
exports.default = ForwardRef;
