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
const LabelPairedKeyboardCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 6.125a.385.385 0 0 0-.375.375v6c0 .21.164.375.375.375h10.5a.385.385 0 0 0 .375-.375v-6a.4.4 0 0 0-.375-.375zM.25 6.5c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5zM4.375 11h5.25c.188 0 .375.188.375.375v.375c0 .21-.187.375-.375.375h-5.25A.37.37 0 0 1 4 11.75v-.375c0-.187.164-.375.375-.375M2.688 9.313c0-.188.164-.376.374-.376h.376c.187 0 .374.188.374.376v.374c0 .211-.187.376-.374.376h-.376a.37.37 0 0 1-.374-.376zm.374-2.25h.376c.187 0 .374.187.374.375v.375c0 .21-.187.375-.374.375h-.376a.37.37 0 0 1-.374-.376v-.375c0-.187.164-.375.374-.375m1.5 2.25c0-.188.165-.376.375-.376h.375c.188 0 .375.188.375.376v.374c0 .211-.187.376-.375.376h-.375a.37.37 0 0 1-.375-.376zm.375-2.25h.375c.188 0 .375.187.375.375v.375c0 .21-.187.375-.375.375h-.375a.37.37 0 0 1-.375-.376v-.375c0-.187.165-.375.375-.375m1.5 2.25c0-.188.165-.376.375-.376h.375c.188 0 .375.188.375.376v.374c0 .211-.187.376-.375.376h-.375a.37.37 0 0 1-.375-.376zm.375-2.25h.375c.188 0 .375.187.375.375v.375c0 .21-.187.375-.375.375h-.375a.37.37 0 0 1-.375-.376v-.375c0-.187.165-.375.375-.375m1.5 2.25c0-.188.165-.376.376-.376h.374c.188 0 .376.188.376.376v.374c0 .211-.188.376-.376.376h-.374a.37.37 0 0 1-.376-.376zm.376-2.25h.374c.188 0 .376.187.376.375v.375c0 .21-.188.375-.376.375h-.374a.37.37 0 0 1-.376-.376v-.375c0-.187.165-.375.376-.375m1.5 2.25c0-.188.164-.376.374-.376h.376c.187 0 .374.188.374.376v.374c0 .211-.187.376-.374.376h-.376a.37.37 0 0 1-.374-.376zm.374-2.25h.376c.187 0 .374.187.374.375v.375c0 .21-.187.375-.374.375h-.376a.37.37 0 0 1-.374-.376v-.375c0-.187.164-.375.374-.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f42e3b16c0c6ebc80fb206b15d526495__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedKeyboardCaptionBoldIcon);
exports.default = ForwardRef;
