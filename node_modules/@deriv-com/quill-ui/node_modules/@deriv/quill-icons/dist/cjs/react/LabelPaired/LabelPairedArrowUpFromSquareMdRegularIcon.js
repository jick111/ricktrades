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
const LabelPairedArrowUpFromSquareMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.344 4.156 3.25 3.25a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L8.5 5.719V14c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V5.719L5.094 8.125a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l3.25-3.25a.53.53 0 0 1 .719 0M2 5h1c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H2c-.562 0-1 .469-1 1v11c0 .563.438 1 1 1h12c.531 0 1-.437 1-1V7c0-.531-.469-1-1-1h-1a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5h1c1.094 0 2 .906 2 2v11c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V7c0-1.094.875-2 2-2' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'dd7bc6f4d1b10d7d7005b2baaaa8d2f4__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpFromSquareMdRegularIcon);
exports.default = ForwardRef;
