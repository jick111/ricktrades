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
const LabelPairedKeyboardCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 5h10.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5v-6c0-.82.656-1.5 1.5-1.5m.375 1.5a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375zM1.75 9.125v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375h-.75a.385.385 0 0 0-.375.375M2.125 11a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75A.4.4 0 0 0 2.875 11zM4 6.875v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375h-.75A.385.385 0 0 0 4 6.875m.375 1.875A.385.385 0 0 0 4 9.125v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375zM4 11.375v.75c0 .21.164.375.375.375h5.25a.385.385 0 0 0 .375-.375v-.75A.4.4 0 0 0 9.625 11h-5.25a.385.385 0 0 0-.375.375M6.625 6.5a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375zM6.25 9.125v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375h-.75a.385.385 0 0 0-.375.375M8.875 6.5a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h.75A.385.385 0 0 0 10 7.625v-.75a.4.4 0 0 0-.375-.375zM8.5 9.125v.75c0 .21.164.375.375.375h.75A.385.385 0 0 0 10 9.875v-.75a.4.4 0 0 0-.375-.375h-.75a.385.385 0 0 0-.375.375M11.125 6.5a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375zm-.375 2.625v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375h-.75a.385.385 0 0 0-.375.375M11.125 11a.385.385 0 0 0-.375.375v.75c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375v-.75a.4.4 0 0 0-.375-.375z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '664ddd231dc9ea6da4eb6c4d047b0b7b__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedKeyboardCaptionFillIcon);
exports.default = ForwardRef;
