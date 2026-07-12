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
const LabelPairedSevenMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 5.75A.74.74 0 0 1 .75 5h8.5c.25 0 .5.156.625.406.156.219.156.5 0 .75l-7.5 12.5a.75.75 0 0 1-1.031.25c-.344-.218-.469-.687-.25-1.031L7.906 6.5H.75A.72.72 0 0 1 0 5.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fba0eab8bf9f8d3ccda32432f13b65fe__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSevenMdBoldIcon);
exports.default = ForwardRef;
