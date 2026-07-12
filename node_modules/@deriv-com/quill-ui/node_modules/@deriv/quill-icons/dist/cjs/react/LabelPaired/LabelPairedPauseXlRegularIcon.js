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
const LabelPairedPauseXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.25 10.5c-.422 0-.75.375-.75.75v13.5c0 .422.328.75.75.75H4.5c.375 0 .75-.328.75-.75v-13.5c0-.375-.375-.75-.75-.75zM0 11.25A2.25 2.25 0 0 1 2.25 9H4.5c1.219 0 2.25 1.031 2.25 2.25v13.5A2.25 2.25 0 0 1 4.5 27H2.25A2.22 2.22 0 0 1 0 24.75zm10.5-.75c-.422 0-.75.375-.75.75v13.5c0 .422.328.75.75.75h2.25c.375 0 .75-.328.75-.75v-13.5c0-.375-.375-.75-.75-.75zm-2.25.75A2.25 2.25 0 0 1 10.5 9h2.25C13.969 9 15 10.031 15 11.25v13.5A2.25 2.25 0 0 1 12.75 27H10.5a2.22 2.22 0 0 1-2.25-2.25z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f09ea16b19d6eaf46a2716417c1f97e9__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPauseXlRegularIcon);
exports.default = ForwardRef;
