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
const LabelPairedPresentationScreenSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 22, viewBox: '0 0 16 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.781 3.75H15.22c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H.78a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656M1 5.938h1.313v5.906c0 .136.082.219.218.219H13.47c.11 0 .219-.083.219-.22V5.939H15v5.906c0 .847-.71 1.531-1.531 1.531h-4.84v1.285l1.996 1.996a.6.6 0 0 1 0 .903c-.246.273-.656.273-.93 0l-1.722-1.723-1.723 1.723a.6.6 0 0 1-.902 0 .6.6 0 0 1 0-.903l1.996-1.996v-1.285H2.53A1.53 1.53 0 0 1 1 11.844z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8387535d6cc25ce4449558d9df71d509__a' },
            React.createElement("path", { d: 'M0 0h16v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPresentationScreenSmBoldIcon);
exports.default = ForwardRef;
