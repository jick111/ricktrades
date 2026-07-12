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
const LabelPairedFolderOpenLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 30, viewBox: '0 0 23 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.688 14.25.25 20.188V9.25c0-1.367 1.094-2.5 2.5-2.5h4.57c.664 0 1.29.273 1.758.742l1.055 1.055c.469.469 1.094.703 1.758.703H16.5c1.367 0 2.5 1.133 2.5 2.5V13H5.875a2.54 2.54 0 0 0-2.187 1.25m1.093.625c.235-.39.625-.625 1.094-.625H21.5c.43 0 .86.273 1.055.664.234.39.234.86 0 1.25l-4.375 7.5a1.28 1.28 0 0 1-1.055.586H1.5c-.469 0-.86-.234-1.094-.625a1.2 1.2 0 0 1 0-1.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '619898dd505f65072a3522a8863d247d__a' },
            React.createElement("path", { d: 'M0 0h23v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFolderOpenLgFillIcon);
exports.default = ForwardRef;
