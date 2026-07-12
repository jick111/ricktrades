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
const LabelPairedFiveCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.375 4.555c.047-.188.188-.305.375-.305h4.875c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H2.031l-.937 3.75H4.75c1.64 0 3 1.36 3 3 0 1.664-1.36 3-3 3H2.219c-.774 0-1.5-.422-1.852-1.125l-.094-.187c-.093-.188 0-.422.164-.516a.385.385 0 0 1 .516.164l.094.21c.234.446.68.727 1.172.727H4.75a2.25 2.25 0 0 0 0-4.5H.625A.4.4 0 0 1 .32 9.36c-.07-.093-.093-.21-.07-.304z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '507b4b7e3f42879f86e256a1f9607d6d__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFiveCaptionRegularIcon);
exports.default = ForwardRef;
