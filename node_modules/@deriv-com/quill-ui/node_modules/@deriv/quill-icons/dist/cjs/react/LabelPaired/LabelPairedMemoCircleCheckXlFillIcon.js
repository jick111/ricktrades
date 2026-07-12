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
const LabelPairedMemoCircleCheckXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 9c0-1.64 1.313-3 3-3h12c1.64 0 3 1.36 3 3v6.328c-3.469.985-6 4.172-6 7.922 0 2.813 1.36 5.25 3.422 6.75H3c-1.687 0-3-1.312-3-3zm3 3.75c0 .422.328.75.75.75h10.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75H3.75c-.422 0-.75.375-.75.75m.75 3.75c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h7.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75zm0 4.5c-.422 0-.75.375-.75.75 0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75 0-.375-.375-.75-.75-.75zm9.75 2.25a6.7 6.7 0 0 1 3.375-5.812c2.063-1.22 4.64-1.22 6.75 0C25.688 18.656 27 20.859 27 23.25c0 2.438-1.312 4.64-3.375 5.86-2.11 1.218-4.687 1.218-6.75 0a6.71 6.71 0 0 1-3.375-5.86m8.813-2.016-2.813 2.86-1.36-1.36c-.28-.28-.796-.28-1.078 0-.28.282-.28.797 0 1.078l1.875 1.875c.282.282.797.282 1.079 0l3.375-3.375c.28-.28.28-.796 0-1.078-.282-.28-.797-.28-1.078 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '77e31577dd21f84d74f6abad1f2f4779__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMemoCircleCheckXlFillIcon);
exports.default = ForwardRef;
