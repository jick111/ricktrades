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
const LabelPairedLaptopMobileMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4 5c-.562 0-1 .469-1 1v7h8v1H1.031c.188.594.719 1 1.344 1H11v1H2.375A2.374 2.374 0 0 1 0 13.625C0 13.281.25 13 .594 13H2V6c0-1.094.875-2 2-2h10c1.094 0 2 .906 2 2v1h-1V6c0-.531-.469-1-1-1zm9 4.5v9c0 .281.219.5.5.5h5c.25 0 .5-.219.5-.5v-9c0-.25-.25-.5-.5-.5h-5c-.281 0-.5.25-.5.5m-1 0A1.5 1.5 0 0 1 13.5 8h5c.813 0 1.5.688 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-5a1.48 1.48 0 0 1-1.5-1.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a0feb2638db9b419bb9f088e17775998__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLaptopMobileMdRegularIcon);
exports.default = ForwardRef;
