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
const LabelPairedArrowRotateLeftSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.418 8.125h1.394A.9.9 0 0 1 5.688 9c0 .492-.41.875-.875.875h-3.5A.864.864 0 0 1 .439 9V5.5c0-.465.382-.875.875-.875a.9.9 0 0 1 .875.875v1.422l.464-.492a6.156 6.156 0 0 1 8.668 0 6.156 6.156 0 0 1 0 8.668 6.156 6.156 0 0 1-8.668 0c-.328-.356-.328-.903 0-1.23.356-.356.903-.356 1.23 0a4.423 4.423 0 0 0 6.208 0 4.423 4.423 0 0 0 0-6.208 4.423 4.423 0 0 0-6.207 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6a726171cbeac310b72b0bc069890781__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRotateLeftSmFillIcon);
exports.default = ForwardRef;
