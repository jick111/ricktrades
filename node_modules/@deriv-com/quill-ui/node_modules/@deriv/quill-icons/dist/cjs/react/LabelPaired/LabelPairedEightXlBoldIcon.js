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
const LabelPairedEightXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14.25 13.313a5.83 5.83 0 0 1-2.062 4.453A5.73 5.73 0 0 1 15 22.688 5.81 5.81 0 0 1 9.188 28.5H5.812A5.78 5.78 0 0 1 0 22.688c0-2.063 1.078-3.938 2.766-4.922C1.5 16.688.75 15.094.75 13.313A5.81 5.81 0 0 1 6.563 7.5h1.875c3.187 0 5.812 2.625 5.812 5.813m-5.812 5.812H5.813a3.56 3.56 0 0 0-3.563 3.563 3.56 3.56 0 0 0 3.563 3.562h3.375a3.56 3.56 0 0 0 3.562-3.562 3.56 3.56 0 0 0-3.562-3.563zm0-2.25A3.56 3.56 0 0 0 12 13.313 3.56 3.56 0 0 0 8.438 9.75H6.562A3.56 3.56 0 0 0 3 13.313a3.56 3.56 0 0 0 3.563 3.562z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f0b09e325728186b7aaf8a24e03d6e78__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEightXlBoldIcon);
exports.default = ForwardRef;
