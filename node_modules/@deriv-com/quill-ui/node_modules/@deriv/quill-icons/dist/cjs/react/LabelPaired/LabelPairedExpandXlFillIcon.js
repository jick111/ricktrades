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
const LabelPairedExpandXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 7.5H6c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H3v3c0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 0 13.5V9c0-.797.656-1.5 1.5-1.5m1.5 15v3h3c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5H1.5A1.48 1.48 0 0 1 0 27v-4.5c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5m12-15h4.5c.797 0 1.5.703 1.5 1.5v4.5c0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5v-3h-3A1.48 1.48 0 0 1 13.5 9c0-.797.656-1.5 1.5-1.5m6 15V27c0 .844-.703 1.5-1.5 1.5H15a1.48 1.48 0 0 1-1.5-1.5c0-.797.656-1.5 1.5-1.5h3v-3c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'aae989a9d70cc9bd2e26b5a4d8bf718c__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExpandXlFillIcon);
exports.default = ForwardRef;
