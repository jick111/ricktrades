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
const LabelPairedFiveMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 5.406C1.563 5.156 1.75 5 2 5h6.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H2.375l-1.25 5H6c2.188 0 4 1.813 4 4 0 2.219-1.812 4-4 4H2.625c-1.031 0-2-.562-2.469-1.5l-.125-.25c-.125-.25 0-.562.219-.687a.513.513 0 0 1 .688.218l.125.282c.312.593.906.968 1.562.968H6a3 3 0 0 0 0-6H.5a.53.53 0 0 1-.406-.219.5.5 0 0 1-.094-.406z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4d17d0defa2e4e7fcb4ab81fac070b90__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFiveMdRegularIcon);
exports.default = ForwardRef;
