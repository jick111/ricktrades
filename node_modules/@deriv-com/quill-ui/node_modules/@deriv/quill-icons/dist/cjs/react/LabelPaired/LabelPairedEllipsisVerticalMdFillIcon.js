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
const LabelPairedEllipsisVerticalMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 4, height: 24, viewBox: '0 0 4 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 15.25c.625 0 1.188.344 1.5.875.313.563.313 1.219 0 1.75a1.68 1.68 0 0 1-1.5.875c-.656 0-1.219-.312-1.531-.875-.313-.531-.313-1.187 0-1.75A1.76 1.76 0 0 1 2 15.25m0-5c.625 0 1.188.344 1.5.875.313.563.313 1.219 0 1.75a1.68 1.68 0 0 1-1.5.875c-.656 0-1.219-.312-1.531-.875-.313-.531-.313-1.187 0-1.75A1.76 1.76 0 0 1 2 10.25M3.75 7a1.76 1.76 0 0 1-.875 1.531c-.562.313-1.219.313-1.75 0C.563 8.22.25 7.656.25 7c0-.625.313-1.187.875-1.5.531-.312 1.188-.312 1.75 0 .531.313.875.875.875 1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '85c17200f94820dce9dae78b35ffcacd__a' },
            React.createElement("path", { d: 'M0 0h4v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEllipsisVerticalMdFillIcon);
exports.default = ForwardRef;
