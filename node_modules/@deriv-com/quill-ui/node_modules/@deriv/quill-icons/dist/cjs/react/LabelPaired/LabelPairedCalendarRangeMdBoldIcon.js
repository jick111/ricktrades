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
const LabelPairedCalendarRangeMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.75 4.75V6h4.5V4.75A.74.74 0 0 1 10 4a.76.76 0 0 1 .75.75V6H12c1.094 0 2 .906 2 2v10c0 1.125-.906 2-2 2H2c-1.125 0-2-.875-2-2V8c0-1.094.875-2 2-2h1.25V4.75A.74.74 0 0 1 4 4a.76.76 0 0 1 .75.75M1.5 10v8c0 .281.219.5.5.5h10c.25 0 .5-.219.5-.5v-8zM3 13c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1m7 2c.531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1 0-.531.438-1 1-1m-4-2a.74.74 0 0 1 .75-.75h3.5A.76.76 0 0 1 11 13a.74.74 0 0 1-.75.75h-3.5A.72.72 0 0 1 6 13m1.25 2.25A.76.76 0 0 1 8 16a.74.74 0 0 1-.75.75h-3.5A.72.72 0 0 1 3 16a.74.74 0 0 1 .75-.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9698d726de65fe039c0bd8832f93b13e__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCalendarRangeMdBoldIcon);
exports.default = ForwardRef;
