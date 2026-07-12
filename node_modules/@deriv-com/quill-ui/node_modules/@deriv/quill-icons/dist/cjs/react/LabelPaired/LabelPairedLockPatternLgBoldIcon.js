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
const LabelPairedLockPatternLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.813 8c0-1.172.976-2.187 2.187-2.187.86 0 1.602.546 1.953 1.25h3.555c.351-.704 1.094-1.25 1.992-1.25.86 0 1.602.546 1.953 1.25h3.555c.351-.704 1.094-1.25 1.992-1.25 1.172 0 2.188 1.015 2.188 2.187 0 1.21-1.016 2.188-2.188 2.188-.273 0-.508-.04-.742-.118l-4.727 4.727c.078.234.156.469.156.703 0 1.21-1.015 2.188-2.187 2.188-.273 0-.508-.04-.742-.118l-4.531 4.493h3.28c.352-.704 1.095-1.25 1.993-1.25.86 0 1.602.546 1.953 1.25h3.555c.351-.704 1.094-1.25 1.992-1.25 1.172 0 2.188 1.015 2.188 2.187 0 1.21-1.016 2.188-2.188 2.188-.898 0-1.64-.508-1.992-1.25h-3.555a2.16 2.16 0 0 1-1.953 1.25c-.898 0-1.64-.508-1.992-1.25H6.953A2.16 2.16 0 0 1 5 25.188 2.184 2.184 0 0 1 2.813 23c0-1.172.976-2.187 2.187-2.187.234 0 .469.078.703.156l4.727-4.727a2.3 2.3 0 0 1-.117-.742c0-1.172.976-2.187 2.187-2.187.234 0 .469.078.703.156l4.531-4.531h-3.28a2.16 2.16 0 0 1-1.954 1.25c-.898 0-1.64-.508-1.992-1.25H6.953A2.16 2.16 0 0 1 5 10.188 2.184 2.184 0 0 1 2.813 8m0 7.5c0 .82.39 1.523 1.093 1.914.664.39 1.485.39 2.188 0A2.2 2.2 0 0 0 7.187 15.5c0-.781-.43-1.484-1.093-1.875-.703-.39-1.524-.39-2.188 0A2.1 2.1 0 0 0 2.812 15.5m15 0c0 .82.39 1.523 1.093 1.914.664.39 1.485.39 2.188 0a2.2 2.2 0 0 0 1.093-1.914c0-.781-.43-1.484-1.093-1.875-.703-.39-1.524-.39-2.188 0a2.1 2.1 0 0 0-1.093 1.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4658997fd8e0565a689a67f67c1f5be9__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLockPatternLgBoldIcon);
exports.default = ForwardRef;
