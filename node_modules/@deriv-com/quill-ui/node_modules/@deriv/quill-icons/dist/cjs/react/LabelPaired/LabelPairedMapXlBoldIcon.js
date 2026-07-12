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
const LabelPairedMapXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M26.484 7.734c.328.188.516.563.516.891v15.75c0 .469-.328.89-.75 1.078l-7.875 3a1.03 1.03 0 0 1-.75 0L9 25.593l-7.5 2.86c-.328.14-.75.094-1.031-.14C.14 28.125 0 27.75 0 27.375v-15.75c0-.469.281-.844.703-1.031l7.875-3c.235-.094.516-.094.75 0l8.625 2.86 7.5-2.86c.328-.14.75-.094 1.031.14M2.25 12.422v13.36l5.625-2.157v-13.36zm14.625 13.406v-13.36l-6.75-2.25v13.36zm2.25-.047 5.625-2.156v-13.36l-5.625 2.157z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e665fcbd7ca453c5967b1070c99e2d91__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMapXlBoldIcon);
exports.default = ForwardRef;
