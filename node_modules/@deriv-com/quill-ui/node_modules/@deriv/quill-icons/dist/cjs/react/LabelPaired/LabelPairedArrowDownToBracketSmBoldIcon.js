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
const LabelPairedArrowDownToBracketSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm10.465 9.684-3.5 3.5c-.274.273-.684.273-.93 0l-3.5-3.5a.6.6 0 0 1 0-.903.6.6 0 0 1 .902 0l2.38 2.38V4.405c0-.355.3-.656.656-.656.382 0 .656.3.656.656v6.754l2.379-2.379c.273-.273.683-.273.93 0a.6.6 0 0 1 0 .903zm-8.777 3.472v2.188c0 .629.464 1.094 1.093 1.094h7.438a1.08 1.08 0 0 0 1.094-1.094v-2.188c0-.355.273-.656.656-.656.355 0 .656.3.656.656v2.188a2.41 2.41 0 0 1-2.406 2.406H2.78a2.39 2.39 0 0 1-2.406-2.406v-2.188c0-.355.273-.656.656-.656.356 0 .657.3.657.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ea4e5167409556a7366230ccc4258fd1__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownToBracketSmBoldIcon);
exports.default = ForwardRef;
