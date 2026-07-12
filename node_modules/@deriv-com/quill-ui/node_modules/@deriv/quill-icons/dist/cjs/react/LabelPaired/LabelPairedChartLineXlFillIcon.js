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
const LabelPairedChartLineXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3 9v15.75c0 .422.328.75.75.75H22.5c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H3.75C1.64 28.5 0 26.86 0 24.75V9c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5m19.031 4.078-6 6c-.562.61-1.547.61-2.11 0l-2.671-2.672-4.219 4.172c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11l5.25-5.25a1.445 1.445 0 0 1 2.11 0L15 15.892l4.922-4.922a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'bbbaf8f03b2bc2fc37a8c31acb7e598f__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineXlFillIcon);
exports.default = ForwardRef;
