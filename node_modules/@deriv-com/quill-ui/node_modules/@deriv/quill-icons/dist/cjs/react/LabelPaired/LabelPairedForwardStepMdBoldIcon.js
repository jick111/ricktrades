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
const LabelPairedForwardStepMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.5 6.75A.74.74 0 0 1 8.25 6a.76.76 0 0 1 .75.75v10.5a.74.74 0 0 1-.75.75.72.72 0 0 1-.75-.75v-3.281l-5.531 3.875c-.157.125-.344.156-.532.156a.92.92 0 0 1-.937-.937V6.969C.5 6.437.906 6 1.438 6c.187 0 .375.063.53.188L7.5 10.063zm0 5.406v-.281L2 8.031V16z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '31f11dd651727ec2dd0c00cc16caf828__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedForwardStepMdBoldIcon);
exports.default = ForwardRef;
