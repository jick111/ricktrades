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
const LabelPairedBankXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.39 6.14a1.68 1.68 0 0 1 1.172 0l10.5 4.5c.657.282 1.032.985.891 1.688-.14.703-.75 1.172-1.453 1.172v.375A1.11 1.11 0 0 1 21.375 15H2.625c-.656 0-1.125-.469-1.125-1.125V13.5c-.75 0-1.36-.469-1.5-1.172a1.515 1.515 0 0 1 .89-1.687zM6 16.5v9h1.875v-9h3v9h2.25v-9h3v9H18v-9h2.953v9.234c.047 0 .094 0 .094.047l2.25 1.5c.562.375.797 1.032.61 1.688A1.46 1.46 0 0 1 22.5 30h-21c-.703 0-1.266-.422-1.453-1.031-.188-.657.047-1.313.61-1.688l2.25-1.5c0-.047.046-.047.093-.047V16.5zM12 9c-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5 0-.797-.703-1.5-1.5-1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8cf610a4fd96215b0873d7b2c69564a5__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBankXlFillIcon);
exports.default = ForwardRef;
