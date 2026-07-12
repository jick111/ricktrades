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
const LabelPairedChartMixedCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.79 5.258 7.851 8.633a.6.6 0 0 1-.727 0L4.453 6.289.867 8.656a.54.54 0 0 1-.773-.14.57.57 0 0 1 .14-.797l3.938-2.625a.564.564 0 0 1 .68.047L7.5 7.46l3.563-3.07a.584.584 0 0 1 .796.07.584.584 0 0 1-.07.797m-7.102 8.367v-3.75a.2.2 0 0 0-.188-.187.185.185 0 0 0-.187.187v3.75c0 .117.07.188.187.188.094 0 .188-.07.188-.188M4.5 8.75c.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125v-3.75c0-.61.492-1.125 1.125-1.125m-2.812 4.875v-1.5a.2.2 0 0 0-.188-.187.185.185 0 0 0-.187.187v1.5c0 .117.07.188.187.188.094 0 .188-.07.188-.188M1.5 11c.61 0 1.125.516 1.125 1.125v1.5c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125v-1.5C.375 11.515.867 11 1.5 11m6.188.375a.2.2 0 0 0-.188-.187.185.185 0 0 0-.187.187v2.25c0 .117.07.188.187.188.094 0 .188-.07.188-.188zm-1.313 0c0-.61.492-1.125 1.125-1.125.61 0 1.125.516 1.125 1.125v2.25c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125zm4.313 2.25v-3.75a.2.2 0 0 0-.188-.187.185.185 0 0 0-.187.187v3.75c0 .117.07.188.187.188.094 0 .188-.07.188-.188M10.5 8.75c.61 0 1.125.516 1.125 1.125v3.75c0 .633-.516 1.125-1.125 1.125a1.11 1.11 0 0 1-1.125-1.125v-3.75c0-.61.492-1.125 1.125-1.125' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '20089a96ae72fe032475ee0a4f4500f3__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartMixedCaptionBoldIcon);
exports.default = ForwardRef;
