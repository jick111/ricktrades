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
const LabelPairedBellXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 36, viewBox: '0 0 21 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.5 6c.797 0 1.5.703 1.5 1.5v.938c3.422.656 6 3.703 6 7.312v.89c0 2.204.797 4.36 2.25 6l.328.376c.422.468.516 1.078.281 1.64-.234.516-.797.844-1.359.844h-18c-.61 0-1.172-.328-1.406-.844a1.52 1.52 0 0 1 .281-1.64l.328-.375C2.156 21 3 18.844 3 16.64v-.891c0-3.61 2.578-6.656 6-7.312V7.5c0-.797.656-1.5 1.5-1.5m2.11 23.156c-.563.563-1.313.844-2.11.844s-1.594-.281-2.156-.844S7.5 27.796 7.5 27h6c0 .797-.328 1.594-.89 2.156' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6d22df848bd6196cff5ec95a4c63135a__a' },
            React.createElement("path", { d: 'M0 0h21v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBellXlFillIcon);
exports.default = ForwardRef;
