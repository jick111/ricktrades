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
const LabelPairedWifiCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.266 8.258c-.305.305-.774.281-1.078-.024-.282-.28-.258-.773.023-1.054C2.109 5.375 4.664 4.25 7.5 4.25c2.813 0 5.367 1.125 7.266 2.93.28.28.304.773.023 1.054-.305.305-.773.329-1.078.024A8.95 8.95 0 0 0 7.5 5.75c-2.437 0-4.617.96-6.234 2.508M7.5 9.5c-1.336 0-2.555.516-3.492 1.313a.743.743 0 0 1-1.055-.047.795.795 0 0 1 .07-1.078C4.22 8.656 5.79 8 7.5 8c1.71 0 3.258.656 4.453 1.688.305.28.352.75.07 1.078a.743.743 0 0 1-1.054.046C10.03 10.017 8.813 9.5 7.5 9.5M9 13.25c0 .54-.305 1.031-.75 1.313a1.55 1.55 0 0 1-1.5 0A1.52 1.52 0 0 1 6 13.25c0-.516.281-1.008.75-1.29a1.55 1.55 0 0 1 1.5 0c.445.282.75.774.75 1.29' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '51bab80a868eae5df777ac81afb49e2a__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWifiCaptionFillIcon);
exports.default = ForwardRef;
