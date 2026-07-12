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
const LabelPairedCircleEnvelopeMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15 12c0-2.5-1.344-4.781-3.5-6.031-2.187-1.282-4.844-1.282-7 0A6.9 6.9 0 0 0 1 12c0 2.531 1.313 4.813 3.5 6.063 2.156 1.28 4.813 1.28 7 0A6.98 6.98 0 0 0 15 12M0 12a7.94 7.94 0 0 1 4-6.906c2.469-1.438 5.5-1.438 8 0C14.469 6.53 16 9.156 16 12c0 2.875-1.531 5.5-4 6.938-2.5 1.437-5.531 1.437-8 0A7.95 7.95 0 0 1 0 12m5-3h6c.531 0 1 .469 1 1v4c0 .563-.469 1-1 1H5c-.562 0-1-.437-1-1v-4c0-.531.438-1 1-1m6 1.531V10H5v.531L7.75 12a.6.6 0 0 0 .25.063.6.6 0 0 0 .219-.063zm0 1.125-2.312 1.219a1.4 1.4 0 0 1-.688.188c-.25 0-.5-.063-.719-.188L5 11.656V14h6z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c09a63770c1c6e17050e2479088fda51__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleEnvelopeMdRegularIcon);
exports.default = ForwardRef;
