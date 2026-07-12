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
const LabelPairedArrowRightArrowLeftLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm17.36 11.398-3.75 3.75a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l1.601-1.641H1.5c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h11.953l-1.601-1.602a1.205 1.205 0 0 1 0-1.757 1.205 1.205 0 0 1 1.757 0l3.75 3.75c.508.468.508 1.289 0 1.757M4.351 25.148l-3.75-3.75a1.205 1.205 0 0 1 0-1.757l3.75-3.75a1.205 1.205 0 0 1 1.757 0c.508.468.508 1.289 0 1.757L4.508 19.25H16.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25H4.508l1.601 1.64c.508.47.508 1.29 0 1.758a1.205 1.205 0 0 1-1.757 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cc421a4079589742d0ec14bf6d43dc75__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRightArrowLeftLgFillIcon);
exports.default = ForwardRef;
