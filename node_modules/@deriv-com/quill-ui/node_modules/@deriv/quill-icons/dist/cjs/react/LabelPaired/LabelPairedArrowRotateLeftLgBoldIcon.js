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
const LabelPairedArrowRotateLeftLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.563 14.25c-.547 0-.938-.39-.938-.937V7.687c0-.507.39-.937.938-.937a.95.95 0 0 1 .937.938v3.164l.781-.938C4.883 8 7.266 6.75 10 6.75c4.805 0 8.75 3.945 8.75 8.75 0 4.844-3.945 8.75-8.75 8.75a8.8 8.8 0 0 1-5.273-1.719c-.391-.312-.508-.898-.196-1.328a.94.94 0 0 1 1.328-.195A6.84 6.84 0 0 0 10 22.375a6.86 6.86 0 0 0 6.875-6.875c0-3.79-3.086-6.875-6.875-6.875-2.148 0-4.023.977-5.312 2.5l-1.055 1.25h3.555a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b56a2f762d90a8fff827b2c52139fb7f__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRotateLeftLgBoldIcon);
exports.default = ForwardRef;
