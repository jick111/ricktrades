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
const LabelPairedSquareListCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 5.75c0-.82.656-1.5 1.5-1.5h7.5c.82 0 1.5.68 1.5 1.5v7.5c0 .844-.68 1.5-1.5 1.5h-7.5a1.48 1.48 0 0 1-1.5-1.5zm2.25 4.5c.398 0 .75-.328.75-.75a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75m.75-3a.77.77 0 0 0-.75-.75.755.755 0 0 0-.75.75c0 .422.328.75.75.75.398 0 .75-.328.75-.75M2.5 12.5c.398 0 .75-.328.75-.75A.77.77 0 0 0 2.5 11a.755.755 0 0 0-.75.75c0 .422.328.75.75.75m2.25-5.812a.555.555 0 0 0-.562.562c0 .328.234.563.562.563H8.5a.555.555 0 0 0 .563-.563.57.57 0 0 0-.563-.562zm0 2.25a.555.555 0 0 0-.562.562c0 .328.234.563.562.563H8.5a.555.555 0 0 0 .563-.563.57.57 0 0 0-.563-.562zm0 2.25a.555.555 0 0 0-.562.562c0 .328.234.563.562.563H8.5a.555.555 0 0 0 .563-.563.57.57 0 0 0-.563-.562z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '06602f1320a4f6fbb9badee814b4e714__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSquareListCaptionFillIcon);
exports.default = ForwardRef;
