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
const LabelPairedArrowUpFromBracketCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm6.016 3.734 3 3a.723.723 0 0 1 0 1.055.723.723 0 0 1-1.055 0L6.25 6.08V11c0 .422-.352.75-.75.75a.74.74 0 0 1-.75-.75V6.078L3.016 7.79a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055l3-3a.723.723 0 0 1 1.055 0M1.75 11.75v1.5c0 .422.328.75.75.75h6c.398 0 .75-.328.75-.75v-1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75v1.5A2.25 2.25 0 0 1 8.5 15.5h-6a2.25 2.25 0 0 1-2.25-2.25v-1.5c0-.398.328-.75.75-.75.398 0 .75.352.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f665fdb8029b374d54202ce5ca26c2a2__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpFromBracketCaptionFillIcon);
exports.default = ForwardRef;
