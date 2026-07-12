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
const LabelPairedChevronsRightXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm22.031 19.078-9 9c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11L18.845 18l-7.922-7.922a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0l9 9c.609.563.609 1.548 0 2.11m-18 9c-.562.61-1.547.61-2.11 0a1.445 1.445 0 0 1 0-2.11L9.845 18l-7.922-7.922a1.445 1.445 0 0 1 0-2.11 1.445 1.445 0 0 1 2.11 0l9 9c.609.563.609 1.548 0 2.11z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cd1239c438923e06c03903d37eb52acc__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChevronsRightXlFillIcon);
exports.default = ForwardRef;
