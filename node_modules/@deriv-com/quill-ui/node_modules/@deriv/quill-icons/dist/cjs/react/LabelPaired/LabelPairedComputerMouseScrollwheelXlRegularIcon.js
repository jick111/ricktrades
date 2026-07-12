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
const LabelPairedComputerMouseScrollwheelXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 36, viewBox: '0 0 18 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M16.5 22.5v-9c0-3.281-2.719-6-6-6h-3c-3.328 0-6 2.719-6 6v9c0 3.328 2.672 6 6 6h3c3.281 0 6-2.672 6-6M0 13.5C0 9.375 3.328 6 7.5 6h3c4.125 0 7.5 3.375 7.5 7.5v9c0 4.172-3.375 7.5-7.5 7.5h-3A7.46 7.46 0 0 1 0 22.5zm9.75-2.25v3c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75v-3c0-.375.328-.75.75-.75.375 0 .75.375.75.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7d7f9a390f31a0eda5181cfc00a10df3__a' },
            React.createElement("path", { d: 'M0 0h18v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedComputerMouseScrollwheelXlRegularIcon);
exports.default = ForwardRef;
