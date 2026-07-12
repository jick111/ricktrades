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
const LabelPairedExpandLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.875 6.75c.313 0 .625.313.625.625A.64.64 0 0 1 5.875 8H1.5v4.375A.64.64 0 0 1 .875 13a.617.617 0 0 1-.625-.625v-5c0-.312.273-.625.625-.625zM.25 18.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625V23h4.375c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625h-5a.617.617 0 0 1-.625-.625zM17.125 6.75c.313 0 .625.313.625.625v5a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V8h-4.375a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625zM16.5 18.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625v5a.64.64 0 0 1-.625.625h-5a.617.617 0 0 1-.625-.625c0-.312.273-.625.625-.625H16.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0ab010914388a7d4088468876b86895a__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExpandLgRegularIcon);
exports.default = ForwardRef;
