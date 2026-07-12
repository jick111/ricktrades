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
exports.StandaloneChartCandlestickRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChartCandlestickRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 8.375v13.75C7.25 23.18 8.07 24 9.125 24h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H9.125C7.367 25.25 6 23.883 6 22.125V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625m11.25 0v1.915c.703.155 1.25.78 1.25 1.523v3.124c0 .782-.547 1.407-1.25 1.563v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V16.5c-.742-.156-1.25-.781-1.25-1.562v-3.126c0-.742.508-1.367 1.25-1.523V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625M12.875 9c.313 0 .625.313.625.625v1.915c.703.155 1.25.78 1.25 1.523v4.374c0 .782-.547 1.407-1.25 1.563v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V19c-.742-.156-1.25-.781-1.25-1.562v-4.375c0-.743.508-1.368 1.25-1.524V9.625c0-.312.273-.625.625-.625m5.625 2.813a.336.336 0 0 0-.312-.313h-.625a.31.31 0 0 0-.313.313v3.124c0 .196.117.313.313.313h.625a.31.31 0 0 0 .312-.312zm4.063 3.437a.31.31 0 0 0-.313.313v1.874c0 .196.117.313.313.313h.625a.31.31 0 0 0 .312-.312v-1.875a.336.336 0 0 0-.312-.313zM22.25 14v-1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625v1.915c.703.155 1.25.78 1.25 1.523v1.874c0 .782-.547 1.407-1.25 1.563v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V19c-.742-.156-1.25-.781-1.25-1.562v-1.875c0-.743.508-1.368 1.25-1.524zm-9.062-1.25h-.626a.31.31 0 0 0-.312.313v4.374c0 .196.117.313.313.313h.624a.31.31 0 0 0 .313-.312v-4.375a.336.336 0 0 0-.312-.313' })));
exports.StandaloneChartCandlestickRegularIcon = StandaloneChartCandlestickRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChartCandlestickRegularIcon);
exports.default = ForwardRef;
