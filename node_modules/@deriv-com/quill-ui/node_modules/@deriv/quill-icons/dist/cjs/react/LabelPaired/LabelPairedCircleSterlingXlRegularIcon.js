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
const LabelPairedCircleSterlingXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M22.5 18c0-3.75-2.016-7.172-5.25-9.047-3.281-1.922-7.266-1.922-10.5 0A10.36 10.36 0 0 0 1.5 18c0 3.797 1.969 7.219 5.25 9.094 3.234 1.922 7.219 1.922 10.5 0A10.48 10.48 0 0 0 22.5 18M0 18A11.91 11.91 0 0 1 6 7.64c3.703-2.156 8.25-2.156 12 0 3.703 2.157 6 6.094 6 10.36 0 4.313-2.297 8.25-6 10.406-3.75 2.157-8.297 2.157-12 0C2.25 26.25 0 22.313 0 18m12.14-5.25c-.937 0-1.687.797-1.687 1.734V16.5h2.297c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-2.297c-.047 1.078-.328 2.11-.844 3h5.766c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H8.25c-.281 0-.562-.14-.703-.375-.094-.234-.094-.562.047-.797l.468-.61A5.5 5.5 0 0 0 8.954 18H8.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h.703v-2.016c-.047-1.78 1.406-3.234 3.188-3.234.515 0 .984.14 1.453.375l.984.469a.77.77 0 0 1 .328 1.031.77.77 0 0 1-1.031.328l-.984-.515a1.9 1.9 0 0 0-.75-.141z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '07cef5489f0216f236266c37baa13bb0__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleSterlingXlRegularIcon);
exports.default = ForwardRef;
