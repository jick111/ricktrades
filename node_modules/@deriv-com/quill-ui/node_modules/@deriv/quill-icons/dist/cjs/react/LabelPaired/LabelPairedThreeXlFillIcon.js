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
const LabelPairedThreeXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 9c0-.797.656-1.5 1.5-1.5h11.25c.61 0 1.172.422 1.36.984a1.45 1.45 0 0 1-.376 1.641l-6.14 5.625h1.031A6.38 6.38 0 0 1 15 22.125 6.35 6.35 0 0 1 8.625 28.5H4.922a5.3 5.3 0 0 1-4.688-2.86l-.093-.187c-.375-.75-.094-1.64.656-2.015s1.64-.094 2.015.656l.094.187c.375.75 1.172 1.219 2.016 1.219h3.703C10.453 25.5 12 24 12 22.125c0-1.828-1.547-3.375-3.375-3.375H3.75a1.49 1.49 0 0 1-1.406-.937 1.45 1.45 0 0 1 .375-1.641l6.14-5.672H1.5A1.48 1.48 0 0 1 0 9' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b3b204b5635160526915fc6ddfb89c6a__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedThreeXlFillIcon);
exports.default = ForwardRef;
