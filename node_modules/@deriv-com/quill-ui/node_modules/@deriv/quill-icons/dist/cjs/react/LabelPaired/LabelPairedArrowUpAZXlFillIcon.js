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
const LabelPairedArrowUpAZXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.578 8.016 4.125 4.5c.563.609.516 1.547-.094 2.109a1.487 1.487 0 0 1-2.109-.094L9 12.891V27c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 6 27V12.89l-1.547 1.641c-.562.61-1.5.656-2.11.094a1.487 1.487 0 0 1-.093-2.11l4.125-4.5A1.5 1.5 0 0 1 7.5 7.5c.422 0 .797.188 1.078.516M15 21c0-.797.656-1.5 1.5-1.5h6c.61 0 1.125.375 1.36.938a1.52 1.52 0 0 1-.329 1.64l-3.422 3.469H22.5c.797 0 1.5.656 1.5 1.5 0 .797-.703 1.5-1.5 1.5h-6c-.61 0-1.172-.375-1.406-.938a1.52 1.52 0 0 1 .328-1.64l3.422-3.469H16.5A1.48 1.48 0 0 1 15 21m4.5-13.5c.563 0 1.078.328 1.313.844l3 6 .75 1.5c.375.75.093 1.64-.657 2.015s-1.64.094-2.015-.656l-.328-.703H17.39l-.328.703c-.375.75-1.266 1.031-2.016.656s-1.031-1.265-.656-2.015l.75-1.5 3-6c.234-.516.75-.844 1.359-.844m-.984 6.75h1.922l-.938-1.875z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1681fa57157bb7ea843aff9f4498ca50__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpAZXlFillIcon);
exports.default = ForwardRef;
