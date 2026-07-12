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
const LabelPairedObjectsColumnCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.375 5.375v3.75h2.25v-3.75zm-1.125 0c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 9.125zm7.125 4.5v3.75h2.25v-3.75zm-1.125 0c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125h-2.25a1.11 1.11 0 0 1-1.125-1.125zm-2.625 2.25h-2.25v1.5h2.25zM1.375 11h2.25c.61 0 1.125.516 1.125 1.125v1.5c0 .633-.516 1.125-1.125 1.125h-2.25A1.11 1.11 0 0 1 .25 13.625v-1.5C.25 11.515.742 11 1.375 11m6-5.625v1.5h2.25v-1.5zm-1.125 0c0-.61.492-1.125 1.125-1.125h2.25c.61 0 1.125.516 1.125 1.125v1.5C10.75 7.508 10.234 8 9.625 8h-2.25A1.11 1.11 0 0 1 6.25 6.875z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8f225689f1046242e5e60e77ae37185e__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedObjectsColumnCaptionBoldIcon);
exports.default = ForwardRef;
