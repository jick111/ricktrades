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
const LabelPairedExpandSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.25 4.625h2.625a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-1.75v1.75c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V5.5c0-.465.383-.875.875-.875m.875 8.75v1.75h1.75A.9.9 0 0 1 4.75 16c0 .492-.41.875-.875.875H1.25A.864.864 0 0 1 .375 16v-2.625c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875m7-8.75h2.625a.9.9 0 0 1 .875.875v2.625c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875v-1.75h-1.75A.864.864 0 0 1 8.25 5.5c0-.465.383-.875.875-.875m3.5 8.75V16c0 .492-.41.875-.875.875H9.125A.864.864 0 0 1 8.25 16c0-.465.383-.875.875-.875h1.75v-1.75c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'aafcc3db0c8fd0c90b87efb70fc94f1a__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExpandSmFillIcon);
exports.default = ForwardRef;
