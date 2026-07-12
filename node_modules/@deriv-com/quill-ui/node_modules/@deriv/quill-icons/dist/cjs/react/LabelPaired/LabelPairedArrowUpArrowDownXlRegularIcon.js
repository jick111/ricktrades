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
const LabelPairedArrowUpArrowDownXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.016 7.734 4.5 4.5c.28.282.28.797 0 1.079-.282.28-.797.28-1.078 0L8.25 10.078V27.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75V10.078l-3.234 3.235c-.282.28-.797.28-1.078 0-.282-.282-.282-.797 0-1.079l4.5-4.5c.28-.28.796-.28 1.078 0m16.5 16.078-4.5 4.5c-.282.282-.797.282-1.078 0l-4.5-4.5c-.282-.28-.282-.796 0-1.078.28-.28.796-.28 1.078 0l3.234 3.235V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75v17.719l3.188-3.235c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.078' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f44bafb1cf1cbc187c35c0bd8c0bef40__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpArrowDownXlRegularIcon);
exports.default = ForwardRef;
