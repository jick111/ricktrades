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
const LabelPairedCreditCardCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 4.25h10.5c.82 0 1.5.68 1.5 1.5v.75H.25v-.75c0-.82.656-1.5 1.5-1.5m12 4.5v4.5c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5v-4.5zm-10.875 3a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h1.5a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375zm2.625.375c0 .21.164.375.375.375h3a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-3a.385.385 0 0 0-.375.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2009cebf734f7c77127e27cdfbb3f332__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCreditCardCaptionFillIcon);
exports.default = ForwardRef;
