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
const LabelPairedLaptopMobileCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 4.25a.755.755 0 0 0-.75.75v5.25h6V11H.773c.141.445.54.75 1.008.75H8.25v.75H1.781A1.78 1.78 0 0 1 0 10.719c0-.258.188-.469.445-.469H1.5V5c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v.75h-.75V5a.77.77 0 0 0-.75-.75zm6.75 3.375v6.75c0 .21.164.375.375.375h3.75a.385.385 0 0 0 .375-.375v-6.75a.4.4 0 0 0-.375-.375h-3.75a.385.385 0 0 0-.375.375m-.75 0c0-.61.492-1.125 1.125-1.125h3.75c.61 0 1.125.516 1.125 1.125v6.75c0 .633-.516 1.125-1.125 1.125h-3.75A1.11 1.11 0 0 1 9 14.375z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'db140481c4fea3dc6931d21763fe404f__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLaptopMobileCaptionRegularIcon);
exports.default = ForwardRef;
