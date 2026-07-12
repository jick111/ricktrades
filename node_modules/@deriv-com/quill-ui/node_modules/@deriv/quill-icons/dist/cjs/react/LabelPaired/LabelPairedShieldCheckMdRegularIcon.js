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
const LabelPairedShieldCheckMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.594 5.188 2.063 7.53c-.344.125-.594.469-.563.844 0 2.938 1.219 8.125 6.094 10.469a.86.86 0 0 0 .781 0C13.25 16.5 14.469 11.312 14.5 8.375c0-.375-.25-.687-.594-.844L8.375 5.188a.86.86 0 0 0-.781 0M8.78 4.25l5.5 2.344c.688.312 1.219.968 1.219 1.781-.031 3.125-1.312 8.781-6.687 11.375-.532.25-1.126.25-1.657 0C1.781 17.156.5 11.5.5 8.375c-.031-.812.5-1.469 1.188-1.781l5.53-2.344a1.94 1.94 0 0 1 1.563 0M8 9.75a.74.74 0 0 0-.75.75c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75.76.76 0 0 0-.75-.75m1.75.75c0 .813-.531 1.469-1.25 1.688V14.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-2.312c-.75-.22-1.25-.876-1.25-1.688 0-.937.781-1.75 1.75-1.75.938 0 1.75.813 1.75 1.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6ad2e20a696ecf603f05d67bce607267__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedShieldCheckMdRegularIcon);
exports.default = ForwardRef;
