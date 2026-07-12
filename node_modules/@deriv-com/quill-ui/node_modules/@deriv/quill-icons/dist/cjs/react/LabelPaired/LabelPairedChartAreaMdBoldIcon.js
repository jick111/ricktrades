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
const LabelPairedChartAreaMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 5.75v11c0 .438.313.75.75.75h13a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-13C1 19 0 18 0 16.75v-11A.74.74 0 0 1 .75 5a.76.76 0 0 1 .75.75m7.438 5.313L7 9.125l-2.5 2.5V14.5h9v-2.437l-1.594-1.844-.875.844a1.47 1.47 0 0 1-2.094 0M10 10l1.031-1.031.188-.188a1.01 1.01 0 0 1 1.469.063l1.937 2.25c.219.281.375.625.375.969V15c0 .563-.469 1-1 1H4c-.562 0-1-.437-1-1v-3.375c0-.375.156-.781.438-1.062L6.28 7.719a1.02 1.02 0 0 1 1.407 0l1.25 1.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b609b9ba7d2dd39ad222e7970c83f4f2__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartAreaMdBoldIcon);
exports.default = ForwardRef;
