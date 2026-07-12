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
const LabelPairedShieldCheckMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.406 4.094 5.875 2.5c.688.312 1.219.968 1.219 1.781-.031 3.125-1.312 8.781-6.687 11.375-.532.25-1.126.25-1.657 0C1.781 17.156.5 11.5.5 8.375c-.031-.812.5-1.469 1.188-1.781l5.875-2.5a1 1 0 0 1 .843 0M9.75 10.5c0-.937-.812-1.75-1.75-1.75-.969 0-1.75.813-1.75 1.75 0 .719.406 1.313 1 1.594v2.156c0 .438.313.75.75.75a.74.74 0 0 0 .75-.75v-2.156c.563-.281 1-.875 1-1.594' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd0bc9a0f5a804d2859e66279e745f990__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedShieldCheckMdFillIcon);
exports.default = ForwardRef;
