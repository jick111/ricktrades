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
const LabelPairedFieldPasswordSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.875 6.813c-.738 0-1.312.601-1.312 1.312v5.25c0 .738.574 1.313 1.312 1.313h12.25c.71 0 1.313-.575 1.313-1.313v-5.25a1.33 1.33 0 0 0-1.313-1.312zM.688 8.124c0-1.203.957-2.187 2.187-2.187h12.25c1.203 0 2.188.984 2.188 2.187v5.25c0 1.23-.985 2.188-2.188 2.188H2.875a2.16 2.16 0 0 1-2.187-2.188zm11.375 5.25a.43.43 0 0 1-.438-.437V8.561a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.438v4.374a.45.45 0 0 1-.437.438M3.75 10.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875m2.625 0c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875m2.625 0c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875A.864.864 0 0 1 9 10.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '98cb659047712ed41e993fcc8114f0ff__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFieldPasswordSmRegularIcon);
exports.default = ForwardRef;
