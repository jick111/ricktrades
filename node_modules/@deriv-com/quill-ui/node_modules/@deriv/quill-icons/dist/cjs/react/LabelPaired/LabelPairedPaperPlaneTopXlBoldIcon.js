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
const LabelPairedPaperPlaneTopXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 36, viewBox: '0 0 25 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.734 16.875h11.72L3.546 10.5zm0 2.25-3.187 6.422 14.906-6.422zM2.563 7.641l21 9c.562.234.937.797.937 1.406 0 .562-.375 1.125-.937 1.36l-21 9a1.52 1.52 0 0 1-1.688-.376c-.422-.422-.516-1.125-.234-1.687L4.813 18 .64 9.703A1.57 1.57 0 0 1 .875 7.97a1.59 1.59 0 0 1 1.688-.328' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a5ac4c07fdacfc2eefcb396e729b7b46__a' },
            React.createElement("path", { d: 'M0 0h25v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPaperPlaneTopXlBoldIcon);
exports.default = ForwardRef;
