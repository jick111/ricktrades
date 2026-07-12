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
const LabelPairedCircleCalendarSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.688 10.75c0-2.023-1.094-3.883-2.844-4.922a5.71 5.71 0 0 0-5.688 0 5.68 5.68 0 0 0-2.843 4.922c0 2.05 1.066 3.91 2.843 4.95a5.71 5.71 0 0 0 5.688 0c1.75-1.04 2.844-2.9 2.844-4.95M0 10.75a6.95 6.95 0 0 1 3.5-6.043c2.16-1.258 4.813-1.258 7 0C12.66 5.965 14 8.262 14 10.75a7.02 7.02 0 0 1-3.5 6.07c-2.187 1.258-4.84 1.258-7 0A6.96 6.96 0 0 1 0 10.75m5.688-3.937a.47.47 0 0 1 .437.437v.438h1.75V7.25a.45.45 0 0 1 .438-.437.47.47 0 0 1 .437.437v.438h.438c.71 0 1.312.601 1.312 1.312v3.5c0 .738-.602 1.313-1.312 1.313H4.812A1.296 1.296 0 0 1 3.5 12.5V9c0-.71.574-1.312 1.313-1.312h.437V7.25a.45.45 0 0 1 .438-.437M4.813 12.5h4.375V9.875H4.812z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'bb756ac88f0f50462d0f89e21bf70725__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleCalendarSmBoldIcon);
exports.default = ForwardRef;
