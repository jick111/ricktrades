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
const LabelPairedPlaceholderCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.313 4.25h.562c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.562C1.586 5 1 5.61 1 6.313v.562c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-.562c0-1.125.914-2.063 2.063-2.063M.625 8C.813 8 1 8.188 1 8.375v2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-2.25C.25 8.188.414 8 .625 8m9.75 0c.188 0 .375.188.375.375v2.25c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375v-2.25c0-.187.164-.375.375-.375m0-.75A.37.37 0 0 1 10 6.875v-.562C10 5.609 9.39 5 8.688 5h-.563a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.563a2.08 2.08 0 0 1 2.062 2.063v.562c0 .21-.187.375-.375.375m.375 4.875v.563a2.066 2.066 0 0 1-2.062 2.062h-.563a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.563C9.39 14 10 13.414 10 12.688v-.563c0-.187.164-.375.375-.375.188 0 .375.188.375.375m-9.75 0v.563A1.31 1.31 0 0 0 2.313 14h.562c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-.562A2.05 2.05 0 0 1 .25 12.688v-.563c0-.187.164-.375.375-.375.188 0 .375.188.375.375m3.375 2.625A.37.37 0 0 1 4 14.375c0-.187.164-.375.375-.375h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375zM4 4.625c0-.187.164-.375.375-.375h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-2.25A.37.37 0 0 1 4 4.625' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '654bffac92fff4e6f38309c1f6050df7__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPlaceholderCaptionRegularIcon);
exports.default = ForwardRef;
