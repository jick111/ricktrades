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
const LabelPairedForwardMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7 6.938c0-.5.406-.938.938-.938.187 0 .375.063.53.188l7.22 5.218c.187.156.312.375.312.594 0 .25-.125.469-.312.625l-7.22 5.219a1.05 1.05 0 0 1-.53.156.92.92 0 0 1-.938-.937v-3.094l-5.531 3.875c-.157.125-.344.156-.532.156A.92.92 0 0 1 0 17.063V6.969C0 6.437.406 6 .938 6c.187 0 .375.063.53.188L7 10.063zm0 4.937L1.5 8.031V16L7 12.156zm6.969.125L8.5 8.063v7.906z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '688e204532b238219288a1ab7bb25191__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedForwardMdBoldIcon);
exports.default = ForwardRef;
