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
const LabelPairedPresentationScreenMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.5 4h17c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5M1 6h1v7c0 .563.438 1 1 1h12c.531 0 1-.437 1-1V6h1v7c0 1.125-.906 2-2 2H9.5v1.313l2.844 2.843a.53.53 0 0 1 0 .719.53.53 0 0 1-.719 0L9 17.219l-2.656 2.656a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719L8.5 16.313V15H3c-1.125 0-2-.875-2-2z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '424a04295be25db2a1540c97e215798a__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPresentationScreenMdRegularIcon);
exports.default = ForwardRef;
