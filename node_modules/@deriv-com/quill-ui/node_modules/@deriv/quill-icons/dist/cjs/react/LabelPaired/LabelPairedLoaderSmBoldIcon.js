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
const LabelPairedLoaderSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.656 4.406v2.188c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V4.406c0-.355.273-.656.656-.656.355 0 .656.3.656.656m0 10.5v2.188c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656v-2.188c0-.355.273-.656.656-.656.355 0 .656.3.656.656M0 10.75c0-.355.273-.656.656-.656h2.188c.355 0 .656.3.656.656 0 .383-.3.656-.656.656H.656A.63.63 0 0 1 0 10.75m11.156-.656h2.188c.355 0 .656.3.656.656 0 .383-.3.656-.656.656h-2.188a.63.63 0 0 1-.656-.656c0-.355.273-.656.656-.656M11.95 5.8c.246.273.246.683 0 .93l-1.558 1.558a.68.68 0 0 1-.93 0 .68.68 0 0 1 0-.93l1.559-1.558c.246-.246.656-.246.93 0m-7.437 8.367-1.559 1.531a.6.6 0 0 1-.902 0 .6.6 0 0 1 0-.902l1.531-1.559a.68.68 0 0 1 .93 0c.246.246.246.657 0 .93M2.05 5.801a.644.644 0 0 1 .902 0l1.559 1.558a.68.68 0 0 1 0 .93c-.246.246-.657.246-.93 0L2.051 6.73c-.274-.246-.274-.656 0-.93m8.34 7.437 1.558 1.559a.644.644 0 0 1 0 .902c-.273.274-.683.274-.93 0l-1.558-1.531a.68.68 0 0 1 0-.93.68.68 0 0 1 .93 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a1d21c1911c2caa3d77d83b2ec410577__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLoaderSmBoldIcon);
exports.default = ForwardRef;
