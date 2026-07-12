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
const LabelPairedMicrosoftStoreCaptionIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.145 6.5V5.164c0-.82.421-1.078 1.218-1.266 1.196-.28 1.266.493 1.266.985v1.125l.305-.047V4.906c0-.937-.305-1.617-1.618-1.312-.726.14-1.453.328-1.453 1.547v1.43zm3.07-1.852c-.024-.117-.047-.21-.047-.304.914-.117 1.078.14 1.078 1.172v.187l-.281.047v-.281c0-.633 0-.938-.75-.82M6.457 5.797c0-.938.375-1.078.844-1.242.023.093.047.187.047.304-.422.188-.586.305-.586.938v.398l-.305.047zM2.66 7.367 10.7 5.75l1.616.586v7.875l-1.617.586-8.039-1.594zm1.735 4.383 1.78.234v-1.71h-1.78zm0-1.71h1.78V8.421l-1.78.258zm2.015 1.968 2.25.328v-2.063H6.41zm0-1.969h2.25V8.094l-2.25.328z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd9604f0c21cc829dd4dbe9bcef927a0b__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMicrosoftStoreCaptionIcon);
exports.default = ForwardRef;
