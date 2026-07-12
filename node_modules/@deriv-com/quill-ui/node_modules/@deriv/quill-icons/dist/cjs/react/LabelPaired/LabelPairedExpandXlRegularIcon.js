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
const LabelPairedExpandXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.75 7.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H1.5v5.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-6c0-.375.328-.75.75-.75zM0 21.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75V27h5.25c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-6a.74.74 0 0 1-.75-.75zM20.25 7.5c.375 0 .75.375.75.75v6c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V9h-5.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75zm-.75 14.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v6c0 .422-.375.75-.75.75h-6a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75h5.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c3e2295291526aea45145f8302bfd94e__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExpandXlRegularIcon);
exports.default = ForwardRef;
