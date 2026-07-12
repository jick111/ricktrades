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
const LabelPairedQrcodeXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.75 9h-4.5c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-4.5c0-.375-.375-.75-.75-.75m-4.5-1.5h4.5C7.969 7.5 9 8.531 9 9.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 14.25v-4.5A2.25 2.25 0 0 1 2.25 7.5M6.75 21h-4.5c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-4.5c0-.375-.375-.75-.75-.75m-4.5-1.5h4.5C7.969 19.5 9 20.531 9 21.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 0 26.25v-4.5a2.25 2.25 0 0 1 2.25-2.25m12-10.5c-.422 0-.75.375-.75.75v4.5c0 .422.328.75.75.75h4.5c.375 0 .75-.328.75-.75v-4.5c0-.375-.375-.75-.75-.75zM12 9.75a2.25 2.25 0 0 1 2.25-2.25h4.5C19.969 7.5 21 8.531 21 9.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5A2.22 2.22 0 0 1 12 14.25zm0 10.5c0-.375.328-.75.75-.75h3c.375 0 .75.375.75.75v3.188h3V20.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v3.938c0 .421-.375.75-.75.75h-4.5a.74.74 0 0 1-.75-.75V21h-1.5v7.125c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75zm-7.875-9.375h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75m-.75 12.75c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm12.75-12.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75v-.75c0-.375.328-.75.75-.75M15 27c0-.375.328-.75.75-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75zm4.5-.75h.75c.375 0 .75.375.75.75v.75c0 .422-.375.75-.75.75h-.75a.74.74 0 0 1-.75-.75V27c0-.375.328-.75.75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '91fe083241d33e9c2d85a87a606c177e__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedQrcodeXlRegularIcon);
exports.default = ForwardRef;
