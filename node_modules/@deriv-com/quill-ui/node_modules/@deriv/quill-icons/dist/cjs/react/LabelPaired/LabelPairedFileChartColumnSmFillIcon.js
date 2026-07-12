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
const LabelPairedFileChartColumnSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 3.75h4.375v3.5c0 .492.383.875.875.875h3.5V16c0 .984-.793 1.75-1.75 1.75H2c-.984 0-1.75-.766-1.75-1.75V5.5c0-.957.766-1.75 1.75-1.75m5.25 0 3.5 3.5h-3.5zm-1.094 6.781c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656v4.813c0 .383.273.656.656.656a.65.65 0 0 0 .656-.656zm2.407 1.75c0-.355-.301-.656-.657-.656-.383 0-.656.3-.656.656v3.063c0 .383.273.656.656.656a.65.65 0 0 0 .657-.656zm-4.813 1.75c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656v1.313c0 .383.273.656.656.656a.65.65 0 0 0 .656-.656z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1c2533acece2a25110d973905a95c154__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileChartColumnSmFillIcon);
exports.default = ForwardRef;
