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
const LabelPairedChartLineXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.25 8.625v16.5c0 .656.469 1.125 1.125 1.125h19.5c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-19.5A3.36 3.36 0 0 1 0 25.125v-16.5C0 8.015.469 7.5 1.125 7.5c.61 0 1.125.516 1.125 1.125m19.922 5.297-6.422 6.375a1.027 1.027 0 0 1-1.547 0L10.5 16.594l-3.703 3.703c-.469.469-1.172.469-1.594 0a1.027 1.027 0 0 1 0-1.547l4.5-4.5c.188-.234.469-.328.797-.328.281 0 .563.094.797.328L15 17.953l5.578-5.578c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '86ad094cf9ac5a66b715cb53d163de77__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineXlBoldIcon);
exports.default = ForwardRef;
