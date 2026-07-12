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
const LabelPairedArrowUpToLineSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.125 4.625h8.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-8.75A.864.864 0 0 1 .25 5.5c0-.465.383-.875.875-.875m4.977 3.773 3.5 3.5a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-1.997-1.995V16c0 .492-.41.875-.875.875A.864.864 0 0 1 4.625 16v-4.867l-2.023 1.996a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l3.5-3.5a.843.843 0 0 1 1.23 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2e9c49d57acac3a35b82c1e3ae7870db__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpToLineSmFillIcon);
exports.default = ForwardRef;
