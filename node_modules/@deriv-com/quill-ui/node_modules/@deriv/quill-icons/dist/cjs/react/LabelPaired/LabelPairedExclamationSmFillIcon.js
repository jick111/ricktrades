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
const LabelPairedExclamationSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 2, height: 22, viewBox: '0 0 2 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 5.5v7c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-7c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875M1 16.875c-.41 0-.766-.191-.957-.547a1.11 1.11 0 0 1 0-1.094c.191-.328.547-.546.957-.546.383 0 .738.218.93.546.191.356.191.766 0 1.094a1.04 1.04 0 0 1-.93.547' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd1f3ca889692d2868a9f29555e011a87__a' },
            React.createElement("path", { d: 'M0 0h2v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExclamationSmFillIcon);
exports.default = ForwardRef;
