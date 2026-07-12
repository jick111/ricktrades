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
const LabelPairedChevronsLeftXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm1.922 16.969 9-9a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11L5.108 18l7.922 7.969c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0l-9-9a1.445 1.445 0 0 1 0-2.11m18-9a1.445 1.445 0 0 1 2.11 0c.609.562.609 1.547 0 2.11L14.108 18l7.922 7.969c.61.562.61 1.547 0 2.11-.562.608-1.547.608-2.11 0l-9-9a1.445 1.445 0 0 1 0-2.11z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '86a24fa6474b3c6166e0fc9a6346acf7__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChevronsLeftXlFillIcon);
exports.default = ForwardRef;
