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
const LabelPairedTwoCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 18, viewBox: '0 0 8 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.578 5.75c-.492 0-.984.21-1.336.563l-.726.726a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055l.726-.726A3.4 3.4 0 0 1 3.579 4.25 3.41 3.41 0 0 1 7 7.672c0 .89-.375 1.758-1.008 2.39L2.805 13.25H7c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1a.75.75 0 0 1-.703-.445.76.76 0 0 1 .164-.82l4.477-4.477c.351-.352.562-.844.562-1.336A1.93 1.93 0 0 0 3.578 5.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '64adef2fef1ae09f903485306d12ddb0__a' },
            React.createElement("path", { d: 'M0 0h8v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTwoCaptionFillIcon);
exports.default = ForwardRef;
