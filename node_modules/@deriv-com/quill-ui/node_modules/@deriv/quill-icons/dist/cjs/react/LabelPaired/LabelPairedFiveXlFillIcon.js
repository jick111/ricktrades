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
const LabelPairedFiveXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 8.766C1.64 8.063 2.25 7.5 3 7.5h9c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H4.219l-.938 5.25h5.344A6.38 6.38 0 0 1 15 22.125 6.35 6.35 0 0 1 8.625 28.5H4.688a4.91 4.91 0 0 1-4.36-2.672l-.187-.375c-.375-.75-.094-1.64.656-2.015s1.64-.094 2.015.656l.188.375A1.87 1.87 0 0 0 4.688 25.5h3.937C10.453 25.5 12 24 12 22.125c0-1.828-1.547-3.375-3.375-3.375H1.5c-.469 0-.89-.187-1.172-.516-.281-.328-.422-.797-.328-1.218z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f0dc55a4d839fdf3ee8b9c06fc231642__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFiveXlFillIcon);
exports.default = ForwardRef;
