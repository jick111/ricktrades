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
const LabelPairedChartCandlestickLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 7.688v13.75c0 .546.39.937.938.937h16.25a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H2.813A2.8 2.8 0 0 1 0 21.438V7.688c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938M12.5 7.375V9.25c.664 0 1.25.586 1.25 1.25v3.75c0 .703-.586 1.25-1.25 1.25v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V15.5c-.703 0-1.25-.547-1.25-1.25V10.5c0-.664.547-1.25 1.25-1.25V7.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625M15 14.25c0-.664.547-1.25 1.25-1.25v-1.875c0-.312.273-.625.625-.625.313 0 .625.313.625.625V13c.664 0 1.25.586 1.25 1.25v2.5c0 .703-.586 1.25-1.25 1.25v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V18c-.703 0-1.25-.547-1.25-1.25zM6.25 10.5V8.625c0-.312.273-.625.625-.625.313 0 .625.313.625.625V10.5c.664 0 1.25.586 1.25 1.25v5c0 .703-.586 1.25-1.25 1.25v1.875a.64.64 0 0 1-.625.625.617.617 0 0 1-.625-.625V18C5.547 18 5 17.453 5 16.75v-5c0-.664.547-1.25 1.25-1.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '59179150d3ca71c3db53b9dd47f4d570__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartCandlestickLgBoldIcon);
exports.default = ForwardRef;
