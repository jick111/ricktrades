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
const LabelPairedFileArrowDownMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 24, viewBox: '0 0 12 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 4h5v4c0 .563.438 1 1 1h4v9c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m6 0 4 4H8zm-1.25 7.25h-.031a.74.74 0 0 0-.75-.75.76.76 0 0 0-.75.75v3.219L4.25 13.5a.684.684 0 0 0-1.031 0 .684.684 0 0 0 0 1.031l2.25 2.25a.684.684 0 0 0 1.031 0l2.25-2.25a.684.684 0 0 0 0-1.031.684.684 0 0 0-1.031 0l-.969.969z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7b589ab18661fac5c060fceada3e1607__a' },
            React.createElement("path", { d: 'M0 0h12v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileArrowDownMdFillIcon);
exports.default = ForwardRef;
