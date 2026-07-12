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
const LabelPairedArrowRightToLineLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M17.75 9.25v12.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V9.25c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m-5.39 7.148-5 5a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l2.851-2.891H1.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h6.953l-2.851-2.852a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l5 5c.508.468.508 1.289 0 1.757' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd6c4fc1be9a5a5dc34a3f2742a0656ca__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRightToLineLgFillIcon);
exports.default = ForwardRef;
