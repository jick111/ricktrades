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
const LabelPairedFileCircleInfoCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 5c0-.82.656-1.5 1.5-1.5H5.5v3c0 .422.328.75.75.75h3v.914a4.13 4.13 0 0 0-3 3.961A4.15 4.15 0 0 0 7.96 15.5H1.75A1.48 1.48 0 0 1 .25 14zm9 1.5h-3v-3zm1.125 2.25c1.195 0 2.297.656 2.906 1.688a3.34 3.34 0 0 1 0 3.374 3.35 3.35 0 0 1-2.906 1.688 3.36 3.36 0 0 1-2.93-1.687 3.34 3.34 0 0 1 0-3.376 3.4 3.4 0 0 1 2.93-1.687m0 2.25a.555.555 0 0 0 .563-.562.57.57 0 0 0-.563-.563.555.555 0 0 0-.562.563c0 .328.234.562.562.562m-.75 1.125c0 .21.164.375.375.375v1.125a.385.385 0 0 0-.375.375c0 .21.164.375.375.375h.75a.385.385 0 0 0 .375-.375.4.4 0 0 0-.375-.375v-1.5a.4.4 0 0 0-.375-.375H10a.385.385 0 0 0-.375.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8fbf54754cdad9ce1b017662e3442cb4__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileCircleInfoCaptionFillIcon);
exports.default = ForwardRef;
