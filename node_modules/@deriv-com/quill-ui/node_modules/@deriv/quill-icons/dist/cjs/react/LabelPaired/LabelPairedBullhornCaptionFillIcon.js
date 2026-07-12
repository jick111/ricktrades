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
const LabelPairedBullhornCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.25 4.25v3.469c.422.21.75.773.75 1.406 0 .656-.328 1.219-.75 1.43V14a.77.77 0 0 1-.469.703.76.76 0 0 1-.82-.164L8.93 13.508a6 6 0 0 0-4.242-1.758H4.5v3c0 .422-.352.75-.75.75h-1.5a.74.74 0 0 1-.75-.75v-3a1.48 1.48 0 0 1-1.5-1.5V8c0-.82.656-1.5 1.5-1.5h3.188A6 6 0 0 0 8.93 4.742l1.03-1.008a.76.76 0 0 1 .821-.164.76.76 0 0 1 .469.68m-1.5 1.805A7.48 7.48 0 0 1 4.688 8H4.5v2.25h.188c1.875 0 3.68.703 5.062 1.969V6.055' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fb4d056f61eff3d03e1990a83afe2e28__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBullhornCaptionFillIcon);
exports.default = ForwardRef;
