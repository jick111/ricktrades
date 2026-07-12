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
const LabelPairedThumbsUpLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.227 6.79c1.015.233 1.68 1.21 1.484 2.226l-.117.43c-.196 1.054-.586 2.03-1.094 2.929h5.625c1.016 0 1.875.86 1.875 1.875a1.91 1.91 0 0 1-1.016 1.68c.43.351.703.86.703 1.445 0 .938-.664 1.68-1.523 1.875.156.273.273.586.273.938 0 .859-.546 1.562-1.328 1.796.04.118.078.274.078.391 0 1.055-.859 1.875-1.875 1.875h-3.828a3.6 3.6 0 0 1-2.07-.625l-1.523-.977a3.82 3.82 0 0 1-1.641-3.125v-4.335c0-1.172.508-2.227 1.406-2.93l.274-.235c1.015-.859 1.758-1.992 1.992-3.32l.078-.43c.234-1.015 1.21-1.68 2.227-1.484M1.25 13h2.5c.664 0 1.25.586 1.25 1.25V23c0 .703-.586 1.25-1.25 1.25h-2.5C.547 24.25 0 23.703 0 23v-8.75C0 13.586.547 13 1.25 13' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'af27168ca401f025aace83b51a680893__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedThumbsUpLgFillIcon);
exports.default = ForwardRef;
