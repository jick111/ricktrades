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
const LabelPairedBriefcaseSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.031 5.063a.216.216 0 0 0-.218.218v1.094h4.375V5.281c0-.11-.11-.218-.22-.218zM3.5 5.28c0-.82.684-1.531 1.531-1.531H8.97c.82 0 1.531.71 1.531 1.531v1.094h1.75c.957 0 1.75.793 1.75 1.75v2.625H0V8.125c0-.957.766-1.75 1.75-1.75H3.5zM14 11.625v3.5c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75v-3.5h5.25v.875c0 .492.383.875.875.875h1.75a.88.88 0 0 0 .875-.875v-.875z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '10daa5082e908780f7c523712ba1b620__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBriefcaseSmFillIcon);
exports.default = ForwardRef;
