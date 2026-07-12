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
const LabelPairedUnlockCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.25 6.5V8h5.625a1.88 1.88 0 0 1 1.875 1.875v3.75A1.866 1.866 0 0 1 8.875 15.5h-6.75A1.85 1.85 0 0 1 .25 13.625v-3.75C.25 8.844 1.07 8 2.125 8H2.5V6.5c0-1.64 1.336-3 3-3 1.36 0 2.508.914 2.86 2.156.07.188-.047.399-.258.469-.188.047-.399-.047-.446-.258A2.26 2.26 0 0 0 5.5 4.25 2.25 2.25 0 0 0 3.25 6.5M1 9.875v3.75a1.11 1.11 0 0 0 1.125 1.125h6.75c.61 0 1.125-.492 1.125-1.125v-3.75A1.14 1.14 0 0 0 8.875 8.75h-6.75C1.492 8.75 1 9.266 1 9.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '57b1edc4804c20f6d899d6bc463f077a__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUnlockCaptionRegularIcon);
exports.default = ForwardRef;
