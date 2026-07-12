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
const LabelPairedArrowDownAZMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.344 15.875-3 3a.53.53 0 0 1-.719 0l-3-3a.53.53 0 0 1 0-.719.53.53 0 0 1 .719 0L4.5 17.312V5.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v11.813l2.125-2.157a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719m5.094-10.594 2 4v.031l.5.97a.513.513 0 0 1-.22.687c-.25.125-.562 0-.687-.219l-.344-.75h-3.406l-.344.75a.513.513 0 0 1-.687.219.513.513 0 0 1-.219-.688l.5-.969v-.03l2-4A.54.54 0 0 1 13 5c.188 0 .344.125.438.281M13 6.625 11.781 9h2.406zM11 13h4c.188 0 .344.125.438.313a.425.425 0 0 1-.063.5L12.031 18H15c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4a.485.485 0 0 1-.469-.281.55.55 0 0 1 .063-.532L13.938 14H11a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '49d9d6b85f38f94539f52d5eb677e167__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownAZMdRegularIcon);
exports.default = ForwardRef;
