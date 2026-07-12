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
const LabelPairedCircleArrowUpMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8 5.5c-2.344 0-4.469 1.25-5.656 3.25a6.52 6.52 0 0 0 0 6.5A6.51 6.51 0 0 0 8 18.5c2.313 0 4.438-1.219 5.625-3.25a6.52 6.52 0 0 0 0-6.5C12.438 6.75 10.313 5.5 8 5.5M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m3.281-9.031h-.031c.313.312.313.781 0 1.062a.684.684 0 0 1-1.031 0L8.75 10.562v4.688A.74.74 0 0 1 8 16a.72.72 0 0 1-.75-.75v-4.687L5.781 12.03c-.312.313-.781.313-1.062 0-.313-.281-.313-.75 0-1.062l2.75-2.75c.281-.281.75-.281 1.062 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '30e023f2e042fe663c1aa569bb3f5728__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleArrowUpMdBoldIcon);
exports.default = ForwardRef;
