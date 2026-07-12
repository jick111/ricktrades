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
const LabelPairedArrowDownAZXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.578 28.031c-.281.328-.656.469-1.078.469s-.844-.14-1.125-.469l-4.125-4.5a1.487 1.487 0 0 1 .094-2.11 1.487 1.487 0 0 1 2.11.095L6 23.156V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v14.156l1.5-1.64c.563-.61 1.5-.657 2.11-.094.609.562.656 1.5.093 2.11zM15 21c0-.797.656-1.5 1.5-1.5h6c.563 0 1.125.375 1.36.938a1.52 1.52 0 0 1-.329 1.64L20.11 25.5H22.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5h-6c-.61 0-1.172-.328-1.406-.89a1.52 1.52 0 0 1 .328-1.641l3.422-3.469H16.5A1.48 1.48 0 0 1 15 21m4.5-13.5c.563 0 1.078.328 1.313.844l3 6 .75 1.5c.375.75.093 1.64-.657 2.015s-1.64.094-2.015-.656l-.328-.703H17.39l-.328.703c-.375.75-1.266 1.031-2.016.656s-1.031-1.265-.656-2.015l.75-1.5 3-6c.234-.516.75-.844 1.359-.844m-.984 6.75h1.922l-.938-1.875z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'dd7d70e6801a65ee45b31f84bc5b06a5__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownAZXlFillIcon);
exports.default = ForwardRef;
