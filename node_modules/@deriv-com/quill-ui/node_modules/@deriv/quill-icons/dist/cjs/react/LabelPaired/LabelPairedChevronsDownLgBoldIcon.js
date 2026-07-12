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
const LabelPairedChevronsDownLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm9.336 23.664-7.5-7.5c-.39-.352-.39-.937 0-1.328.351-.352.937-.352 1.328 0L10 21.71l6.836-6.836c.352-.39.937-.39 1.328 0a.92.92 0 0 1 0 1.29l-7.539 7.5a.856.856 0 0 1-1.29 0m-7.5-15c-.39-.351-.39-.937 0-1.328.351-.352.937-.352 1.328 0L10 14.21l6.836-6.836c.352-.39.937-.39 1.328 0a.92.92 0 0 1 0 1.29l-7.539 7.5a.856.856 0 0 1-1.29 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6008d89fb5e1a98ee3c612dea2b77a58__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChevronsDownLgBoldIcon);
exports.default = ForwardRef;
