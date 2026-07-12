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
const LabelPairedTakeProfitSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.402 8.508v5.906H4.79V8.508H2.82V7.086h5.551v1.422zm3.063 5.906V7.086h3.473c.328 0 .656.082.93.191.273.11.491.274.683.465.191.219.355.465.465.766a3.3 3.3 0 0 1 0 1.887c-.11.3-.274.546-.465.738-.192.191-.41.355-.684.492-.273.11-.574.164-.93.164h-1.859v2.625zm1.613-4.02h1.668c.246 0 .438-.054.547-.19.164-.11.219-.302.219-.548V9.22c0-.246-.055-.438-.219-.547-.11-.137-.3-.192-.547-.192h-1.668z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '595df9c857bce05a048557bafc7df031__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTakeProfitSmBoldIcon);
exports.default = ForwardRef;
