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
const LabelPairedChartAreaMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1 5.5v11c0 .844.656 1.5 1.5 1.5h13c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-13A2.47 2.47 0 0 1 0 16.5v-11c0-.25.219-.5.5-.5.25 0 .5.25.5.5m8.281 5.219L7 8.438 4.125 11.28a.47.47 0 0 0-.125.344V15h10v-2.937c0-.126-.062-.22-.125-.313l-1.937-2.281-1.25 1.25A.97.97 0 0 1 10 11a1 1 0 0 1-.719-.281m0-1.406L10 10l.688-.687.53-.532a1.01 1.01 0 0 1 1.47.063l1.937 2.25c.219.281.375.625.375.969V15c0 .563-.469 1-1 1H4c-.562 0-1-.437-1-1v-3.375c0-.375.156-.781.438-1.062L6.28 7.719a1.02 1.02 0 0 1 1.407 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '430f38eaa6c0ff3a9baa818ddb4cc0d9__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartAreaMdRegularIcon);
exports.default = ForwardRef;
