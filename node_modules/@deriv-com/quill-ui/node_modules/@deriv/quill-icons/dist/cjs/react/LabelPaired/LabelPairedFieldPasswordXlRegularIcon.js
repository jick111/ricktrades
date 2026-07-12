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
const LabelPairedFieldPasswordXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 30, height: 36, viewBox: '0 0 30 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.5 11.25a2.25 2.25 0 0 0-2.25 2.25v9c0 1.266.984 2.25 2.25 2.25h21a2.25 2.25 0 0 0 2.25-2.25v-9c0-1.219-1.031-2.25-2.25-2.25zM.75 13.5c0-2.062 1.64-3.75 3.75-3.75h21a3.76 3.76 0 0 1 3.75 3.75v9c0 2.11-1.687 3.75-3.75 3.75h-21c-2.11 0-3.75-1.64-3.75-3.75zm19.5 9a.74.74 0 0 1-.75-.75v-7.5c0-.375.328-.75.75-.75.375 0 .75.375.75.75v7.5c0 .422-.375.75-.75.75M6 18c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 6 18m4.5 0c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5a1.48 1.48 0 0 1-1.5-1.5m4.5 0c0-.797.656-1.5 1.5-1.5.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5A1.48 1.48 0 0 1 15 18' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7053b62f958799e0d68f393c682ec898__a' },
            React.createElement("path", { d: 'M0 0h30v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFieldPasswordXlRegularIcon);
exports.default = ForwardRef;
