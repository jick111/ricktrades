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
const LabelPairedArrowDownToLineMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 24, viewBox: '0 0 12 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.25 19H.75a.72.72 0 0 1-.75-.75.74.74 0 0 1 .75-.75h10.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75m-5.812-4.219-4-4.25a.774.774 0 0 1 .03-1.062c.313-.281.782-.281 1.063.031l2.719 2.875V5.75A.74.74 0 0 1 6 5a.76.76 0 0 1 .75.75v6.625L9.438 9.5c.28-.312.75-.312 1.062-.031s.313.75.031 1.062l-4 4.25A.73.73 0 0 1 6 15a.75.75 0 0 1-.562-.219' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '413aa9edbdd3fba4e8b2d8a28b582f0b__a' },
            React.createElement("path", { d: 'M0 0h12v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownToLineMdBoldIcon);
exports.default = ForwardRef;
