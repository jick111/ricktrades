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
const LabelPairedObjectsColumnXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.25 9c-.422 0-.75.375-.75.75v7.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-7.5c0-.375-.375-.75-.75-.75zM0 9.75A2.25 2.25 0 0 1 2.25 7.5h4.5C7.969 7.5 9 8.531 9 9.75v7.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 17.25zM14.25 18c-.422 0-.75.375-.75.75v7.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-7.5c0-.375-.375-.75-.75-.75zm-2.25.75a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 12 26.25zM6.75 22.5h-4.5c-.422 0-.75.375-.75.75v3c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-3c0-.375-.375-.75-.75-.75M2.25 21h4.5C7.969 21 9 22.031 9 23.25v3a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 26.25v-3A2.25 2.25 0 0 1 2.25 21m12-12c-.422 0-.75.375-.75.75v3c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-3c0-.375-.375-.75-.75-.75zM12 9.75a2.25 2.25 0 0 1 2.25-2.25h4.5C19.969 7.5 21 8.531 21 9.75v3A2.25 2.25 0 0 1 18.75 15h-4.5A2.22 2.22 0 0 1 12 12.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'be8111b7d7b99608745543529c51d929__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedObjectsColumnXlRegularIcon);
exports.default = ForwardRef;
