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
const LabelPairedArrowUpFromBracketMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm7.531 4.219 3.969 4c.313.312.313.781 0 1.062-.281.313-.75.313-1.062 0l-2.72-2.719v7.688c0 .438-.312.75-.75.75a.74.74 0 0 1-.75-.75V6.563L3.5 9.28a.684.684 0 0 1-1.031 0c-.313-.281-.313-.75 0-1.062l4-4c.281-.282.75-.282 1.062 0M1.5 14.75v2.5c0 .719.531 1.25 1.25 1.25h8.5c.688 0 1.25-.531 1.25-1.25v-2.5a.74.74 0 0 1 .75-.75.76.76 0 0 1 .75.75v2.5c0 1.531-1.25 2.75-2.75 2.75h-8.5A2.734 2.734 0 0 1 0 17.25v-2.5A.74.74 0 0 1 .75 14a.76.76 0 0 1 .75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd26f515163568878fd343b8eb95fc50f__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpFromBracketMdBoldIcon);
exports.default = ForwardRef;
