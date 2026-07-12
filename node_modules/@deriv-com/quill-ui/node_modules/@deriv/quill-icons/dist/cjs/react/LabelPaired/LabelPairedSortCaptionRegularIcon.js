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
const LabelPairedSortCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.047 7.719C1 7.766 1 7.789 1 7.836c0 .094.07.164.164.164h5.649C6.906 8 7 7.93 7 7.836a.13.13 0 0 0-.07-.117L4.117 5.07A.13.13 0 0 0 4 5q-.105 0-.14.07zm-.516-.54 2.813-2.671A.92.92 0 0 1 4 4.25c.234 0 .469.094.633.258L7.445 7.18a.9.9 0 0 1 .305.656.92.92 0 0 1-.937.914H1.164a.9.9 0 0 1-.914-.914c0-.234.094-.492.281-.656m.516 4.126 2.812 2.648C3.883 14 3.93 14 4 14c.047 0 .094 0 .117-.047l2.813-2.648c.047-.047.07-.07.07-.117A.2.2 0 0 0 6.813 11H1.164c-.094 0-.164.094-.164.188 0 .046 0 .07.047.117m-.516.539a.89.89 0 0 1-.281-.656.92.92 0 0 1 .914-.938h5.649a.94.94 0 0 1 .937.938.9.9 0 0 1-.305.656l-2.812 2.672c-.164.164-.399.234-.633.234-.258 0-.492-.07-.656-.234z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e2a263c0589de6d74d3b6b9656d3b28e__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSortCaptionRegularIcon);
exports.default = ForwardRef;
