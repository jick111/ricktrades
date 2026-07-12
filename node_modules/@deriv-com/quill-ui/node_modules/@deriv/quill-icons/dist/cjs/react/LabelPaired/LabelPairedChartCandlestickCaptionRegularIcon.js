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
const LabelPairedChartCandlestickCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.75 4.625v8.25A1.11 1.11 0 0 0 1.875 14h9.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-9.75A1.85 1.85 0 0 1 0 12.875v-8.25c0-.187.164-.375.375-.375.188 0 .375.188.375.375m6.75 0v1.148c.422.094.75.47.75.915v1.875a.96.96 0 0 1-.75.937v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V9.5A.935.935 0 0 1 6 8.563V6.687c0-.445.305-.82.75-.914V4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375M4.125 5c.188 0 .375.188.375.375v1.148c.422.094.75.47.75.915v2.625A.96.96 0 0 1 4.5 11v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11a.935.935 0 0 1-.75-.937V7.437c0-.445.305-.82.75-.914V5.375c0-.187.164-.375.375-.375M7.5 6.688a.2.2 0 0 0-.187-.188h-.375a.185.185 0 0 0-.188.188v1.875c0 .117.07.187.188.187h.375c.093 0 .187-.07.187-.187zM9.938 8.75a.185.185 0 0 0-.188.188v1.124c0 .118.07.188.188.188h.374c.094 0 .188-.07.188-.187V8.937a.2.2 0 0 0-.187-.187zM9.75 8V6.875c0-.187.164-.375.375-.375.188 0 .375.188.375.375v1.148c.422.094.75.47.75.915v1.124a.96.96 0 0 1-.75.938v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11a.935.935 0 0 1-.75-.937V8.937c0-.445.305-.82.75-.914zm-5.437-.75h-.375a.185.185 0 0 0-.188.188v2.625c0 .117.07.187.188.187h.374c.094 0 .188-.07.188-.187V7.437a.2.2 0 0 0-.187-.187' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '129baa19a084b4852f832bd0f87cefc5__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartCandlestickCaptionRegularIcon);
exports.default = ForwardRef;
