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
const LabelPairedLoaderSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.875 4.625v1.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-1.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m0 10.5v1.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-1.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875M0 10.75c0-.465.383-.875.875-.875h1.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H.875A.864.864 0 0 1 0 10.75m11.375-.875h1.75a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-1.75a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875M2.051 5.801c.328-.328.875-.328 1.23 0l1.23 1.258a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-1.23-1.23a.875.875 0 0 1 0-1.258m8.64 7.437 1.258 1.23c.328.356.328.903 0 1.231a.875.875 0 0 1-1.258 0l-1.23-1.23a.89.89 0 0 1 0-1.23c.355-.356.902-.356 1.23 0M2.051 15.7v.028a.875.875 0 0 1 0-1.258l1.23-1.23a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-1.23 1.23c-.355.356-.902.356-1.23 0m7.41-8.64L10.69 5.8a.927.927 0 0 1 1.258 0 .927.927 0 0 1 0 1.258l-1.258 1.23c-.328.328-.875.328-1.23 0-.328-.355-.328-.902 0-1.23' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'aa7551f737a3e474d759e7fdc0f20c8c__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLoaderSmFillIcon);
exports.default = ForwardRef;
