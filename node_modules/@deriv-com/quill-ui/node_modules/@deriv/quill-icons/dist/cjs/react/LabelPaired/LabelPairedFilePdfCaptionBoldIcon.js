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
const LabelPairedFilePdfCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 14.375h1.125V15.5H1.5A1.48 1.48 0 0 1 0 14V5c0-.82.656-1.5 1.5-1.5h3.867c.399 0 .774.164 1.055.445l2.133 2.133c.28.281.445.656.445 1.055v3.492H7.875V7.25H6a.74.74 0 0 1-.75-.75V4.625H1.5A.385.385 0 0 0 1.125 5v9c0 .21.164.375.375.375m2.625-2.625h.75c.703 0 1.313.61 1.313 1.313 0 .726-.61 1.312-1.313 1.312H4.5v.75c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-3c0-.187.164-.375.375-.375m.75 1.875a.555.555 0 0 0 .563-.562.57.57 0 0 0-.563-.563H4.5v1.125zm2.25-1.875h.75c.61 0 1.125.516 1.125 1.125v1.5c0 .633-.516 1.125-1.125 1.125h-.75a.37.37 0 0 1-.375-.375v-3c0-.187.164-.375.375-.375m.75 3a.385.385 0 0 0 .375-.375v-1.5a.4.4 0 0 0-.375-.375H7.5v2.25zm1.875-2.625c0-.187.164-.375.375-.375h1.125c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.75v.75h.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.75v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-3' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cf69d16bbf2f77ee03dcc65aad04d223__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFilePdfCaptionBoldIcon);
exports.default = ForwardRef;
