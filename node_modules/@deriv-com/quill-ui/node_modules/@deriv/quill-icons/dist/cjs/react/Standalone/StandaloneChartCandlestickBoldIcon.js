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
exports.StandaloneChartCandlestickBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChartCandlestickBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.875 8.688v13.75c0 .546.39.937.938.937h16.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H8.813A2.8 2.8 0 0 1 6 22.438V8.688c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938M18.5 8.375v1.875c.664 0 1.25.586 1.25 1.25v3.75c0 .703-.586 1.25-1.25 1.25v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V16.5c-.703 0-1.25-.547-1.25-1.25V11.5c0-.664.547-1.25 1.25-1.25V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625M21 15.25c0-.664.547-1.25 1.25-1.25v-1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625V14c.664 0 1.25.586 1.25 1.25v2.5c0 .703-.586 1.25-1.25 1.25v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V19c-.703 0-1.25-.547-1.25-1.25zm-8.75-3.75V9.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625V11.5c.664 0 1.25.586 1.25 1.25v5c0 .703-.586 1.25-1.25 1.25v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V19c-.703 0-1.25-.547-1.25-1.25v-5c0-.664.547-1.25 1.25-1.25' })));
exports.StandaloneChartCandlestickBoldIcon = StandaloneChartCandlestickBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChartCandlestickBoldIcon);
exports.default = ForwardRef;
