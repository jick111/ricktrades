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
const LabelPairedExclamationSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 2, height: 22, viewBox: '0 0 2 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.656 5.281v7.875c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V5.281c0-.355.273-.656.656-.656.355 0 .656.3.656.656M1 16.875A.864.864 0 0 1 .125 16c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3e98c5e8099e3ba3ab622d6d0198fcbf__a' },
            React.createElement("path", { d: 'M0 0h2v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExclamationSmBoldIcon);
exports.default = ForwardRef;
