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
const LabelPairedChevronsUpMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm8.344 5.656 6 6a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L8 6.719l-5.656 5.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l6-6a.53.53 0 0 1 .719 0m6 12a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L8 12.719l-5.656 5.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l6-6a.53.53 0 0 1 .719 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd9d128a19b4e43135b815f341b8697ce__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChevronsUpMdRegularIcon);
exports.default = ForwardRef;
