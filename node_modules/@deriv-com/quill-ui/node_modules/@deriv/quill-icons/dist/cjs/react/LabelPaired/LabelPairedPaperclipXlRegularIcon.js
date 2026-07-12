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
const LabelPairedPaperclipXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M17.813 9.188a3.48 3.48 0 0 0-4.922 0l-9 9a5.574 5.574 0 0 0 0 7.921 5.574 5.574 0 0 0 7.922 0l7.124-7.125c.282-.28.797-.28 1.079 0 .28.282.28.797 0 1.078l-7.125 7.125c-2.766 2.766-7.313 2.766-10.078 0-2.766-2.812-2.766-7.312 0-10.078l9-9a5.065 5.065 0 0 1 7.078 0 5.065 5.065 0 0 1 0 7.079l-8.625 8.625c-1.313 1.312-3.516 1.171-4.688-.282-.984-1.265-.89-3.047.234-4.172l7.126-7.125c.28-.28.796-.28 1.078 0 .28.282.28.797 0 1.079L6.89 20.437c-.61.563-.657 1.5-.141 2.157.61.75 1.781.843 2.438.14l8.625-8.625a3.48 3.48 0 0 0 0-4.921' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '09839ab29baf6fe871cab95f9bc09680__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPaperclipXlRegularIcon);
exports.default = ForwardRef;
