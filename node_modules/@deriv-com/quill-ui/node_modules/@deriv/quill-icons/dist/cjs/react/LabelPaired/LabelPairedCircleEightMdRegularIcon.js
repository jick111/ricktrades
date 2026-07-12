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
const LabelPairedCircleEightMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15 12c0-2.5-1.344-4.781-3.5-6.031-2.187-1.282-4.844-1.282-7 0A6.9 6.9 0 0 0 1 12c0 2.531 1.313 4.813 3.5 6.063 2.156 1.28 4.813 1.28 7 0A6.98 6.98 0 0 0 15 12M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m8.375-4c1.156 0 2.125.969 2.125 2.125 0 .656-.281 1.219-.719 1.594.563.437.969 1.125.969 1.906A2.374 2.374 0 0 1 8.375 16h-.75a2.374 2.374 0 0 1-2.375-2.375c0-.781.375-1.469.938-1.906-.438-.375-.688-.938-.688-1.594C5.5 8.969 6.438 8 7.625 8zm-.75 3.25h.75c.594 0 1.125-.5 1.125-1.125C9.5 9.531 8.969 9 8.375 9h-.75A1.14 1.14 0 0 0 6.5 10.125c0 .625.5 1.125 1.125 1.125m.75 1h-.75c-.781 0-1.375.625-1.375 1.375 0 .781.594 1.375 1.375 1.375h.75c.75 0 1.375-.594 1.375-1.375 0-.75-.625-1.375-1.375-1.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '29fc771739da1fe07f4c685066c0ef48__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleEightMdRegularIcon);
exports.default = ForwardRef;
