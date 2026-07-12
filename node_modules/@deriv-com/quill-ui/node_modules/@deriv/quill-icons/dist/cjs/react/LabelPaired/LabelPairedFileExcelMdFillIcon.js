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
const LabelPairedFileExcelMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 24, viewBox: '0 0 12 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 4h5v4c0 .563.438 1 1 1h4v9c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2m6 0 4 4H8zm-3.156 7.844a.717.717 0 0 0-1.032-.188.72.72 0 0 0-.187 1.031l1.438 2.063-1.438 2.094c-.25.312-.156.781.188 1.031a.717.717 0 0 0 1.03-.187L6 16.063l1.125 1.625c.25.343.688.437 1.031.187.344-.25.438-.687.188-1.031L6.906 14.75l1.438-2.062a.72.72 0 0 0-.188-1.032.717.717 0 0 0-1.031.188L6 13.469z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '94889b66cbecb5766972e7f80b4a72a8__a' },
            React.createElement("path", { d: 'M0 0h12v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileExcelMdFillIcon);
exports.default = ForwardRef;
