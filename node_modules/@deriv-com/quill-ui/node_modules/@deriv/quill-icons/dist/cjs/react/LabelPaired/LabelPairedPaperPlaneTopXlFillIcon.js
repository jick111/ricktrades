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
const LabelPairedPaperPlaneTopXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 36, viewBox: '0 0 25 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm2.797 7.313 20.719 9c1.5.656 1.5 2.765 0 3.421l-20.72 9c-1.593.703-3.233-1.078-2.39-2.625l3.282-6.047a1.29 1.29 0 0 1 1.03-.703l8.25-1.03c.141 0 .282-.142.282-.329 0-.14-.14-.281-.281-.281l-8.25-1.032c-.469-.093-.844-.328-1.032-.703L.408 9.938c-.844-1.547.796-3.329 2.39-2.626' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4edb4b0c8026aa23a131e08adc4e0c9e__a' },
            React.createElement("path", { d: 'M0 0h25v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPaperPlaneTopXlFillIcon);
exports.default = ForwardRef;
