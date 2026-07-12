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
const LabelPairedLinkSimpleSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.125 10.75A4.37 4.37 0 0 1 4.5 6.375h1.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H4.5a2.626 2.626 0 0 0 0 5.25h1.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H4.5A4.353 4.353 0 0 1 .125 10.75m15.75 0a4.37 4.37 0 0 1-4.375 4.375H9.75a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h1.75a2.626 2.626 0 0 0 0-5.25H9.75a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h1.75a4.39 4.39 0 0 1 4.375 4.375m-10.5-.875h5.25a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-5.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f2a177965ffa702404a05ad17280459e__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLinkSimpleSmFillIcon);
exports.default = ForwardRef;
