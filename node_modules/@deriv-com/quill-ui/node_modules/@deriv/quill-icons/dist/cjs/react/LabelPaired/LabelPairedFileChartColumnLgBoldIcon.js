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
const LabelPairedFileChartColumnLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 30, viewBox: '0 0 15 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.875 23c0 .352.273.625.625.625h10a.64.64 0 0 0 .625-.625V11.75H10c-.703 0-1.25-.547-1.25-1.25V7.375H2.5A.64.64 0 0 0 1.875 8zM2.5 5.5h6.445c.664 0 1.29.273 1.758.742l3.555 3.555c.469.469.742 1.094.742 1.758V23c0 1.406-1.133 2.5-2.5 2.5h-10A2.47 2.47 0 0 1 0 23V8c0-1.367 1.094-2.5 2.5-2.5m5.938 10.938v5c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937v-5c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938m3.437 1.25v3.75c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-3.75c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938M5 18.938v2.5c0 .546-.43.937-.937.937-.547 0-.938-.39-.938-.937v-2.5c0-.508.39-.938.938-.938a.95.95 0 0 1 .937.938' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '89c62828f22576621e76f56127bfc7a2__a' },
            React.createElement("path", { d: 'M0 0h15v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileChartColumnLgBoldIcon);
exports.default = ForwardRef;
