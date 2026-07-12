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
const LabelPairedCircleArrowDownCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6 4.25a5.24 5.24 0 0 0-4.547 2.625 5.14 5.14 0 0 0 0 5.25A5.19 5.19 0 0 0 6 14.75a5.18 5.18 0 0 0 4.523-2.625 5.14 5.14 0 0 0 0-5.25A5.23 5.23 0 0 0 6 4.25M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m2.508-5.344-2.25 2.25a.397.397 0 0 1-.54 0l-2.25-2.25a.397.397 0 0 1 0-.539c.141-.14.4-.14.54 0l1.617 1.617V6.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375v4.36l1.594-1.618c.14-.14.398-.14.539 0 .14.14.14.399 0 .54' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'aa7942e268394d3f145b39038e1e69d6__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleArrowDownCaptionRegularIcon);
exports.default = ForwardRef;
