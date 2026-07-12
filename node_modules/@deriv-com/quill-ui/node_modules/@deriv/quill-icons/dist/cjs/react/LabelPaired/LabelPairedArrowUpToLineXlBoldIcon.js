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
const LabelPairedArrowUpToLineXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 36, viewBox: '0 0 18 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.125 7.5h15.75c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125H1.125C.469 9.75 0 9.281 0 8.625 0 8.015.469 7.5 1.125 7.5m8.672 6.375 6 6.375c.422.469.422 1.172-.047 1.594s-1.172.422-1.594-.047l-4.031-4.313v9.891A1.11 1.11 0 0 1 9 28.5c-.656 0-1.125-.469-1.125-1.125v-9.89l-4.078 4.312c-.422.469-1.125.469-1.594.047s-.469-1.125-.047-1.594l6-6.375c.235-.234.516-.375.844-.375.281 0 .61.14.797.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd649a737aece856b847f568ab134da01__a' },
            React.createElement("path", { d: 'M0 0h18v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpToLineXlBoldIcon);
exports.default = ForwardRef;
