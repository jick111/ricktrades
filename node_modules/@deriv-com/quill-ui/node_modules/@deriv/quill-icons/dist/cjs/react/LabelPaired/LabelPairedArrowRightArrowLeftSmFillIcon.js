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
const LabelPairedArrowRightArrowLeftSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm12.352 7.879-2.625 2.625a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23l1.12-1.149H1.25a.864.864 0 0 1-.875-.875c0-.465.383-.875.875-.875h8.367l-1.12-1.121a.843.843 0 0 1 0-1.23.843.843 0 0 1 1.23 0l2.625 2.624a.843.843 0 0 1 0 1.23m-9.106 9.625L.621 14.879a.843.843 0 0 1 0-1.23l2.625-2.626a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-1.12 1.122h8.394a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875H3.355l1.122 1.148a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '443cde59ce21cb924ceadaf51bd8c67d__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRightArrowLeftSmFillIcon);
exports.default = ForwardRef;
