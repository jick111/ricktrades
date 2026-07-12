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
const LabelPairedWalletSignalSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 7.031a2.41 2.41 0 0 1 2.406-2.406H12.72c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H2.656A1.08 1.08 0 0 0 1.562 7.03v7.438c0 .629.465 1.094 1.094 1.094h7.219v1.312H2.656A2.39 2.39 0 0 1 .25 14.469zm2.625.875c0-.355.273-.656.656-.656h8.313a2.43 2.43 0 0 1 2.406 2.406v.82a8 8 0 0 0-1.312-.437v-.383c0-.601-.493-1.094-1.094-1.094H3.53a.63.63 0 0 1-.656-.656m7.875 3.5c0-.355.273-.656.656-.656 3.5 0 6.344 2.844 6.344 6.344 0 .383-.3.656-.656.656a.63.63 0 0 1-.657-.656c0-2.762-2.269-5.032-5.03-5.032a.63.63 0 0 1-.657-.656m0 2.625c0-.355.273-.656.656-.656a3.723 3.723 0 0 1 3.719 3.719c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656 2.43 2.43 0 0 0-2.407-2.407.63.63 0 0 1-.656-.656m0 2.844c0-.465.383-.875.875-.875a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3acc0af1739bddaa57547f2459b5e2b7__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWalletSignalSmBoldIcon);
exports.default = ForwardRef;
