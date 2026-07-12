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
const LabelPairedGridLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 8.313c0-.86.664-1.563 1.563-1.563h1.875c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563H1.812c-.898 0-1.562-.664-1.562-1.562zm0 6.25C.25 13.703.914 13 1.813 13h1.875c.859 0 1.562.703 1.562 1.563v1.874c0 .899-.703 1.563-1.562 1.563H1.812C.915 18 .25 17.336.25 16.438zm5 6.25v1.875c0 .898-.703 1.562-1.562 1.562H1.812c-.898 0-1.562-.664-1.562-1.562v-1.875c0-.86.664-1.563 1.563-1.563h1.875c.859 0 1.562.703 1.562 1.563m1.25-12.5c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.874c0 .899-.703 1.563-1.562 1.563H8.062c-.898 0-1.562-.664-1.562-1.562zm5 6.25v1.874c0 .899-.703 1.563-1.562 1.563H8.062c-.898 0-1.562-.664-1.562-1.562v-1.875c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563m-5 6.25c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.875c0 .898-.703 1.562-1.562 1.562H8.062c-.898 0-1.562-.664-1.562-1.562zm11.25-12.5v1.874c0 .899-.703 1.563-1.562 1.563h-1.875c-.899 0-1.563-.664-1.563-1.562V8.312c0-.859.664-1.562 1.563-1.562h1.874c.86 0 1.563.703 1.563 1.563m-5 6.25c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563v1.874c0 .899-.703 1.563-1.562 1.563h-1.875c-.899 0-1.563-.664-1.563-1.562zm5 6.25v1.875c0 .898-.703 1.562-1.562 1.562h-1.875c-.899 0-1.563-.664-1.563-1.562v-1.875c0-.86.664-1.563 1.563-1.563h1.874c.86 0 1.563.703 1.563 1.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '36b8fc72cdee035e6b2338d6b4bce98f__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGridLgFillIcon);
exports.default = ForwardRef;
