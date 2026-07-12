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
const LabelPairedMobileNotchXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 36, viewBox: '0 0 18 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12 8.25V9c0 .422-.375.75-.75.75h-4.5A.74.74 0 0 1 6 9v-.75H4.5c-.844 0-1.5.703-1.5 1.5v16.5c0 .844.656 1.5 1.5 1.5h9c.797 0 1.5-.656 1.5-1.5V9.75c0-.797-.703-1.5-1.5-1.5zM.75 9.75C.75 7.688 2.39 6 4.5 6h9a3.76 3.76 0 0 1 3.75 3.75v16.5c0 2.11-1.687 3.75-3.75 3.75h-9C2.39 30 .75 28.36.75 26.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0f865b2172e79aecdab4a7b413d23f8f__a' },
            React.createElement("path", { d: 'M0 0h18v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMobileNotchXlBoldIcon);
exports.default = ForwardRef;
