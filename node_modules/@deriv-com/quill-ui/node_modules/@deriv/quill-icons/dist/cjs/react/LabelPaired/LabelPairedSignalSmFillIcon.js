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
const LabelPairedSignalSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M16 3.75a.9.9 0 0 1 .875.875v12.25c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V4.625c0-.465.383-.875.875-.875m-3.5 2.625a.9.9 0 0 1 .875.875v9.625c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V7.25c0-.465.383-.875.875-.875m-2.625 3.5v7c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-7C8.125 9.41 8.508 9 9 9a.9.9 0 0 1 .875.875M5.5 11.625a.9.9 0 0 1 .875.875v4.375c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V12.5c0-.465.383-.875.875-.875m-2.625 3.5v1.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-1.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5fb519f3d61fccf22350b186a619e616__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSignalSmFillIcon);
exports.default = ForwardRef;
