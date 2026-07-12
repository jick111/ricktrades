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
const LabelPairedPasteMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5 4a2.01 2.01 0 0 1 1.719 1H8.5c.813 0 1.5.688 1.5 1.5V7H8.5A2.487 2.487 0 0 0 6 9.5V18H1.5A1.48 1.48 0 0 1 0 16.5v-10A1.5 1.5 0 0 1 1.5 5h1.75c.344-.594 1-1 1.75-1m3.5 4h3.875c.375 0 .781.188 1.063.469l2.093 2.094c.281.28.469.687.469 1.062V18.5a1.5 1.5 0 0 1-1.5 1.5h-6A1.48 1.48 0 0 1 7 18.5v-9A1.5 1.5 0 0 1 8.5 8M5 5.25a.74.74 0 0 0-.75.75c0 .438.313.75.75.75A.74.74 0 0 0 5.75 6 .76.76 0 0 0 5 5.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '89f697cadf3f3d3dbdf894f4826de504__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPasteMdFillIcon);
exports.default = ForwardRef;
