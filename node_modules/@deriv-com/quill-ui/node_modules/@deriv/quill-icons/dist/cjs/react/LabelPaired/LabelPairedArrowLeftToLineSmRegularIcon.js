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
const LabelPairedArrowLeftToLineSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.375 15.563V5.938A.45.45 0 0 1 .813 5.5a.47.47 0 0 1 .437.438v9.625A.45.45 0 0 1 .813 16a.43.43 0 0 1-.438-.437m2.734-5.114 3.5-3.5a.463.463 0 0 1 .63 0 .463.463 0 0 1 0 .63l-2.762 2.734h7.711a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438H4.477l2.761 2.761a.463.463 0 0 1 0 .63.463.463 0 0 1-.629 0l-3.5-3.5a.463.463 0 0 1 0-.63' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '68f4a7d23af7cc3755f0d673a58c51d7__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowLeftToLineSmRegularIcon);
exports.default = ForwardRef;
