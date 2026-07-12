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
const LabelPairedQuestionXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.75 9a4.5 4.5 0 0 0-4.5 4.5c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75c0-3.281 2.672-6 6-6h1.5c3.281 0 6 2.719 6 6a5.26 5.26 0 0 1-2.11 4.219l-2.859 2.156c-.656.469-1.031 1.266-1.031 2.063v.562c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-.562c0-1.266.61-2.485 1.64-3.282l2.86-2.156a3.7 3.7 0 0 0 1.5-3c0-2.484-2.016-4.5-4.5-4.5zm-.375 18c0-.61.469-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125A1.11 1.11 0 0 1 7.5 28.125c-.656 0-1.125-.469-1.125-1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b268cf49669b8b49a046724c7213832f__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedQuestionXlRegularIcon);
exports.default = ForwardRef;
