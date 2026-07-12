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
const LabelPairedFolderOpenCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.75 7.25A.77.77 0 0 0 10 6.5H7.234a2.27 2.27 0 0 1-1.593-.656l-.61-.61.516-.539-.516.54A.76.76 0 0 0 4.492 5H1.75a.755.755 0 0 0-.75.75v6.727l1.195-3A1.11 1.11 0 0 1 3.25 8.75h9.375a1.1 1.1 0 0 1 .914.516c.211.304.258.68.117 1.03l-1.5 3.75a1.085 1.085 0 0 1-1.031.704H1.75a1.48 1.48 0 0 1-1.5-1.5v-7.5c0-.82.656-1.5 1.5-1.5h2.742c.399 0 .774.164 1.055.445l.633.633c.28.281.656.422 1.054.422H10c.82 0 1.5.68 1.5 1.5V8h-.75zM9.25 14h1.875c.14 0 .281-.094.328-.234l1.5-3.75a.38.38 0 0 0-.023-.352.4.4 0 0 0-.305-.164H3.25a.35.35 0 0 0-.352.258l-1.5 3.75a.33.33 0 0 0 .024.328c.07.117.187.164.328.164z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1d14b39f343c8394889310afc21627d1__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFolderOpenCaptionRegularIcon);
exports.default = ForwardRef;
