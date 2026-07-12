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
const LabelPairedPersonChalkboardSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.844 5.281c0 .383.273.657.656.657a.65.65 0 0 0 .656-.657c0-.355-.3-.656-.656-.656-.383 0-.656.3-.656.656m2.187 0a1.531 1.531 0 0 1-2.297 1.34c-.492-.273-.765-.766-.765-1.34 0-.547.273-1.039.765-1.312A1.53 1.53 0 0 1 7.031 5.28M5.145 8.125c-.192 0-.356.055-.52.11V12.5h1.75V8.125zm-.52 9.188a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V9.3l-1.367 2.543a.45.45 0 0 1-.602.191c-.218-.137-.3-.383-.191-.601l1.613-3.008A2.21 2.21 0 0 1 5.145 7.25H9V5.063c0-.711.574-1.313 1.313-1.313h6.124c.711 0 1.313.602 1.313 1.313v6.125c0 .738-.602 1.312-1.312 1.312h-6.125A1.296 1.296 0 0 1 9 11.188V9h.875v2.188c0 .246.191.437.438.437h6.124a.45.45 0 0 0 .438-.437V5.062a.47.47 0 0 0-.437-.437h-6.125a.45.45 0 0 0-.438.438V7.25h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H7.25v9.188a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-3.938h-1.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b3f68d5f8af936e733d66bd5ba3c34cd__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPersonChalkboardSmRegularIcon);
exports.default = ForwardRef;
