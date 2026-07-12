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
const LabelPairedFolderOpenXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.125 16.5 0 23.625V10.5c0-1.64 1.313-3 3-3h5.484c.797 0 1.547.328 2.11.89l1.265 1.266c.563.563 1.313.844 2.11.844H19.5c1.64 0 3 1.36 3 3V15H6.75a3.05 3.05 0 0 0-2.625 1.5m1.313.75c.28-.469.75-.75 1.312-.75H25.5c.516 0 1.031.328 1.266.797a1.44 1.44 0 0 1 0 1.5l-5.25 9c-.282.422-.75.703-1.266.703H1.5a1.5 1.5 0 0 1-1.312-.75 1.44 1.44 0 0 1 0-1.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f2cb13af376ec327c7ea41e7a9dac35a__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFolderOpenXlFillIcon);
exports.default = ForwardRef;
