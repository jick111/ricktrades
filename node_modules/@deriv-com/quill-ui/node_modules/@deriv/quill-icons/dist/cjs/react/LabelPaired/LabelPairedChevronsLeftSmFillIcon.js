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
const LabelPairedChevronsLeftSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm1.121 10.148 5.25-5.25a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-4.62 4.622 4.62 4.648a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-5.25-5.25a.843.843 0 0 1 0-1.23m10.5-5.25a.843.843 0 0 1 1.23 0 .843.843 0 0 1 0 1.23l-4.62 4.622 4.62 4.648a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-5.25-5.25a.843.843 0 0 1 0-1.23z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6b68c484f34dd1a334c4e0d24fde74ce__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChevronsLeftSmFillIcon);
exports.default = ForwardRef;
