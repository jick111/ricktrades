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
const LabelPairedFaceViewfinderCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.125 3.5h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-2.25a.385.385 0 0 0-.375.375v2.25c0 .21-.187.375-.375.375A.37.37 0 0 1 0 6.875v-2.25C0 4.015.492 3.5 1.125 3.5m9.75 0c.61 0 1.125.516 1.125 1.125v2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-2.25a.4.4 0 0 0-.375-.375h-2.25a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375zM0 14.375v-2.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.25c0 .21.164.375.375.375h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-2.25A1.11 1.11 0 0 1 0 14.375M10.875 15.5h-2.25a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h2.25a.385.385 0 0 0 .375-.375v-2.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.25c0 .633-.516 1.125-1.125 1.125m-5.25-6.937a.555.555 0 0 1-.562.562.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563m1.313.562a.54.54 0 0 1-.563-.562c0-.305.234-.563.563-.563a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562M6 6.5A3.03 3.03 0 0 0 3.398 8a2.99 2.99 0 0 0 0 3c.54.938 1.524 1.5 2.602 1.5 1.055 0 2.04-.562 2.578-1.5.54-.914.54-2.062 0-3C8.04 7.086 7.055 6.5 6 6.5m0 6.75a3.73 3.73 0 0 1-3.258-1.875 3.7 3.7 0 0 1 0-3.75A3.78 3.78 0 0 1 6 5.75c1.336 0 2.555.727 3.234 1.875a3.7 3.7 0 0 1 0 3.75A3.72 3.72 0 0 1 6 13.25m-.984-3.187c.187.351.562.562.984.562.398 0 .773-.21.96-.562.118-.165.33-.235.517-.118.187.094.234.328.14.516-.328.539-.937.937-1.617.937a1.94 1.94 0 0 1-1.64-.937c-.094-.188-.048-.422.14-.516a.37.37 0 0 1 .516.117' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0e26717738232b4d6055e0b9d692a834__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFaceViewfinderCaptionRegularIcon);
exports.default = ForwardRef;
