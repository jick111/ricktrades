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
const LabelPairedCloneXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 27.75h10.5c.375 0 .75-.328.75-.75v-3h2.25v3c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3V16.5c0-1.64 1.313-3 3-3h3v2.25H3c-.422 0-.75.375-.75.75V27c0 .422.328.75.75.75m7.5-7.5H21c.375 0 .75-.328.75-.75V9c0-.375-.375-.75-.75-.75H10.5c-.422 0-.75.375-.75.75v10.5c0 .422.328.75.75.75m-3-.75V9c0-1.64 1.313-3 3-3H21c1.64 0 3 1.36 3 3v10.5c0 1.688-1.36 3-3 3H10.5c-1.687 0-3-1.312-3-3' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6b214cfac8fb47181d8582515628aaae__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCloneXlBoldIcon);
exports.default = ForwardRef;
