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
const LabelPairedCashRegisterCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 3.5h5.25c.398 0 .75.352.75.75v1.5c0 .422-.352.75-.75.75H4.875v.75h5.086c.726 0 1.36.563 1.476 1.29l.516 3.491c.024.117.047.235.047.352V14c0 .844-.68 1.5-1.5 1.5h-9A1.48 1.48 0 0 1 0 14v-1.617c0-.117 0-.235.023-.328L.54 8.539c.117-.726.75-1.289 1.5-1.289h1.336V6.5H1.5a.74.74 0 0 1-.75-.75v-1.5c0-.398.328-.75.75-.75m.75 1.125A.385.385 0 0 0 1.875 5c0 .21.164.375.375.375H6A.385.385 0 0 0 6.375 5 .4.4 0 0 0 6 4.625zm-.75 9c0 .21.164.375.375.375h8.25a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375h-8.25a.385.385 0 0 0-.375.375m1.125-3.937a.555.555 0 0 0 .563-.563.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562c0 .328.234.563.562.563m2.813-.563a.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562c0 .328.234.563.562.563a.555.555 0 0 0 .563-.563M3.75 11.563A.555.555 0 0 0 4.313 11a.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562c0 .328.234.563.562.563m3.938-2.438a.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562c0 .328.234.563.562.563a.555.555 0 0 0 .563-.563M6 11.563A.555.555 0 0 0 6.563 11 .57.57 0 0 0 6 10.438a.555.555 0 0 0-.562.562c0 .328.234.563.562.563m3.938-2.438a.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562c0 .328.234.563.562.563a.555.555 0 0 0 .563-.563M8.25 11.563A.555.555 0 0 0 8.813 11a.57.57 0 0 0-.563-.562.555.555 0 0 0-.562.562c0 .328.234.563.562.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a814dbd9e008686e5905d2bc4bca3a37__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCashRegisterCaptionFillIcon);
exports.default = ForwardRef;
