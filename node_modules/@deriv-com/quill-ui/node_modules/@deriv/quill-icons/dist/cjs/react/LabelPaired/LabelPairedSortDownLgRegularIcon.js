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
const LabelPairedSortDownLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 30, viewBox: '0 0 13 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.266 22.922c.039.078.117.078.234.078.078 0 .156 0 .195-.078l4.688-4.414c.078-.078.117-.117.117-.195a.336.336 0 0 0-.312-.313H1.773c-.156 0-.273.156-.273.313 0 .078 0 .117.078.195zm-.86.937L.72 19.406c-.313-.273-.469-.703-.469-1.093 0-.86.664-1.563 1.523-1.563h9.414c.86 0 1.563.703 1.563 1.563 0 .39-.195.82-.508 1.093L7.555 23.86c-.274.274-.664.391-1.055.391-.43 0-.82-.117-1.094-.39' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '55e7a8746b8f75b5b1ed8de08ce5d640__a' },
            React.createElement("path", { d: 'M0 0h13v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSortDownLgRegularIcon);
exports.default = ForwardRef;
