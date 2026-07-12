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
const LabelPairedBackwardCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.867 9.5 6 13.227v-7.43zM6.047 5a.72.72 0 0 1 .703.703v2.438l4.125-3A.65.65 0 0 1 11.297 5a.72.72 0 0 1 .703.703v7.594a.705.705 0 0 1-.703.703.8.8 0 0 1-.422-.117l-4.125-3v2.414a.705.705 0 0 1-.703.703.8.8 0 0 1-.422-.117L.211 9.969A.59.59 0 0 1 0 9.5c0-.164.07-.328.21-.445L5.626 5.14A.65.65 0 0 1 6.047 5m.703 4.969 4.5 3.258v-7.43l-4.5 3.258z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '25e1ad27f81e800aee8bb6bec81eaf64__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBackwardCaptionRegularIcon);
exports.default = ForwardRef;
