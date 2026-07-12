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
const LabelPairedArrowsRotateCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.203 7.906c-.14.282-.469.399-.75.282a.56.56 0 0 1-.305-.727A5.28 5.28 0 0 1 6 4.25c1.219 0 2.39.492 3.258 1.36L10.5 6.851v-1.29c0-.304.234-.562.563-.562a.57.57 0 0 1 .562.563v2.625a.555.555 0 0 1-.562.562H8.437a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563h1.265L8.461 6.406A3.5 3.5 0 0 0 6 5.375a4.12 4.12 0 0 0-3.797 2.531m8.625 3.68C10.008 13.437 8.156 14.75 6 14.75c-1.242 0-2.414-.469-3.281-1.36L1.5 12.173v1.265A.555.555 0 0 1 .938 14a.54.54 0 0 1-.563-.562v-2.626c0-.304.234-.562.563-.562h2.625a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-1.29l1.243 1.242A3.5 3.5 0 0 0 6 13.625c1.688 0 3.164-1.008 3.773-2.484a.575.575 0 0 1 .75-.305.58.58 0 0 1 .305.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0afd13052d02c179bb72ccdb3af1a422__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowsRotateCaptionBoldIcon);
exports.default = ForwardRef;
