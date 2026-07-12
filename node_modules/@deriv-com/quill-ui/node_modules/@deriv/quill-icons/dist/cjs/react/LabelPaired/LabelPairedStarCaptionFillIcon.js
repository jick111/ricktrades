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
const LabelPairedStarCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.656 3.922 9.18 7.039l3.351.492a.76.76 0 0 1 .61.516.7.7 0 0 1-.188.75l-2.437 2.414.586 3.422a.74.74 0 0 1-.305.726c-.235.188-.54.188-.797.07l-3-1.617-3.023 1.618a.72.72 0 0 1-.774-.07.74.74 0 0 1-.305-.727l.563-3.422-2.438-2.414c-.187-.188-.257-.492-.187-.75a.76.76 0 0 1 .61-.516L4.82 7.04l1.5-3.117A.73.73 0 0 1 7 3.5c.281 0 .54.164.656.422' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '89e376ef70c3f15e61bc0f891b578936__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedStarCaptionFillIcon);
exports.default = ForwardRef;
