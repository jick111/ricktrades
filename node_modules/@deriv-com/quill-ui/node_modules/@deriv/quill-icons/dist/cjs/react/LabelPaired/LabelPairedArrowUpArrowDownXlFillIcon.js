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
const LabelPairedArrowUpArrowDownXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.531 7.969 4.5 4.5c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0L9 12.655V27c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 6 27V12.656l-1.969 1.922c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l4.5-4.5a1.445 1.445 0 0 1 2.11 0m16.5 15.61-4.5 4.5c-.562.608-1.547.608-2.11 0l-4.5-4.5a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0L18 23.39V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5v14.39l1.922-1.921a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '27979f791af983066031b61af7a8b40d__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpArrowDownXlFillIcon);
exports.default = ForwardRef;
