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
const LabelPairedMoneyBillXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.25 11.25c0 1.688-1.36 3-3 3v7.5c1.64 0 3 1.36 3 3h16.5c0-1.64 1.313-3 3-3v-7.5c-1.687 0-3-1.312-3-3zM0 12c0-1.64 1.313-3 3-3h21c1.64 0 3 1.36 3 3v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3zm13.5 1.5c1.594 0 3.047.89 3.89 2.25.797 1.406.797 3.14 0 4.5-.843 1.406-2.296 2.25-3.89 2.25-1.64 0-3.094-.844-3.937-2.25-.797-1.36-.797-3.094 0-4.5.843-1.36 2.296-2.25 3.937-2.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '68029a60cac69b3ca3eda733a2d224ed__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMoneyBillXlBoldIcon);
exports.default = ForwardRef;
