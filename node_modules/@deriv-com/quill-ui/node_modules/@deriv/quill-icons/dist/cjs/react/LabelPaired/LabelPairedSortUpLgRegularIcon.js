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
const LabelPairedSortUpLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 30, viewBox: '0 0 13 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm6.266 8.117-4.688 4.414c-.078.078-.078.117-.078.196 0 .156.117.273.273.273h9.414c.157 0 .313-.117.313-.273a.22.22 0 0 0-.117-.196L6.695 8.117A.22.22 0 0 0 6.5 8q-.175 0-.234.117m-.86-.937c.274-.274.664-.43 1.094-.43.39 0 .781.156 1.055.43l4.687 4.453c.313.273.508.703.508 1.094 0 .859-.703 1.523-1.562 1.523H1.773c-.859 0-1.523-.664-1.523-1.523 0-.391.156-.82.469-1.094z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8cb32f61f7eceb4cde7a8a8be890b7b0__a' },
            React.createElement("path", { d: 'M0 0h13v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSortUpLgRegularIcon);
exports.default = ForwardRef;
