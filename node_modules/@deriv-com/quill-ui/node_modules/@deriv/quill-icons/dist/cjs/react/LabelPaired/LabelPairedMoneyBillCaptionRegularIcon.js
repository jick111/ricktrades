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
const LabelPairedMoneyBillCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.5 5.75c0 .844.656 1.5 1.5 1.5V6.5a.77.77 0 0 0-.75-.75zm-.75 0h-7.5A2.25 2.25 0 0 1 1 8v3a2.25 2.25 0 0 1 2.25 2.25h7.5A2.25 2.25 0 0 1 13 11V8a2.25 2.25 0 0 1-2.25-2.25M1 12.5c0 .422.328.75.75.75h.75c0-.82-.68-1.5-1.5-1.5zm12-.75c-.844 0-1.5.68-1.5 1.5h.75c.398 0 .75-.328.75-.75zm-11.25-6A.755.755 0 0 0 1 6.5v.75c.82 0 1.5-.656 1.5-1.5zm-1.5.75c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5zm8.25 3c0-.516-.305-1.008-.75-1.29a1.55 1.55 0 0 0-1.5 0c-.469.282-.75.774-.75 1.29 0 .54.281 1.031.75 1.313a1.55 1.55 0 0 0 1.5 0c.445-.282.75-.774.75-1.313m-3.75 0c0-.797.422-1.523 1.125-1.945a2.27 2.27 0 0 1 2.25 0c.68.422 1.125 1.148 1.125 1.945 0 .82-.445 1.547-1.125 1.969a2.27 2.27 0 0 1-2.25 0A2.27 2.27 0 0 1 4.75 9.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a6d4bbef102c6815f8cf40435553206f__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMoneyBillCaptionRegularIcon);
exports.default = ForwardRef;
