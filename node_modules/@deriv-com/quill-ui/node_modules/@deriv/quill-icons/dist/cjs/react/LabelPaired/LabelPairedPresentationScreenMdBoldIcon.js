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
const LabelPairedPresentationScreenMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.75 4h16.5a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75H.75A.72.72 0 0 1 0 4.75.74.74 0 0 1 .75 4M1 6.5h1.5v6.75c0 .156.094.25.25.25h12.5c.125 0 .25-.094.25-.25V6.5H17v6.75c0 .969-.812 1.75-1.75 1.75H9.719v1.469L12 18.75a.684.684 0 0 1 0 1.031c-.281.313-.75.313-1.062 0l-1.97-1.968L7 19.78a.684.684 0 0 1-1.031 0 .684.684 0 0 1 0-1.031l2.281-2.281V15h-5.5C1.781 15 1 14.219 1 13.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9f9ed5b75f828c57e95485857f7ad156__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPresentationScreenMdBoldIcon);
exports.default = ForwardRef;
