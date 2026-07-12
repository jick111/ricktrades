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
const LabelPairedMessageLinesMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 6c0-1.094.875-2 2-2h12c1.094 0 2 .906 2 2v9c0 1.125-.906 2-2 2H9.656l-3.875 2.906c-.156.125-.343.125-.531.063A.51.51 0 0 1 5 19.5V17H2c-1.125 0-2-.875-2-2zm4.75 2.5a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h6.5a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75zm0 3a.74.74 0 0 0-.75.75c0 .438.313.75.75.75h3.5a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4696c85bef771efc4396e84a8fe9f6a9__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMessageLinesMdFillIcon);
exports.default = ForwardRef;
