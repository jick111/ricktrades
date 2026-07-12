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
const LabelPairedStopwatchCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.625 4.063c0-.305.234-.563.563-.563h2.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-.75v1.172A4.75 4.75 0 0 1 8.71 6.992l.703-.703c.211-.21.563-.21.774 0 .234.234.234.586 0 .797l-.727.726c.562.797.914 1.782.914 2.813 0 2.695-2.203 4.875-4.875 4.875a4.868 4.868 0 0 1-.562-9.703V4.625h-.75a.54.54 0 0 1-.563-.562M5.5 14.375A3.72 3.72 0 0 0 8.734 12.5a3.7 3.7 0 0 0 0-3.75C8.054 7.602 6.836 6.875 5.5 6.875A3.78 3.78 0 0 0 2.242 8.75a3.7 3.7 0 0 0 0 3.75A3.73 3.73 0 0 0 5.5 14.375m.563-5.812V11a.555.555 0 0 1-.563.563.54.54 0 0 1-.562-.563V8.563c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4bd1950da79973d1dba598447fae386e__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedStopwatchCaptionBoldIcon);
exports.default = ForwardRef;
