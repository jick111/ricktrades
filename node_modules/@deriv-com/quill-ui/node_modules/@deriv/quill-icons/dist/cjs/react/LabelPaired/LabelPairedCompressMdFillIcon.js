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
const LabelPairedCompressMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5 6v3c0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h2V6c0-.531.438-1 1-1 .531 0 1 .469 1 1m-4 8h3c.531 0 1 .469 1 1v3c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-2H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1m10-8v2h2c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-3c-.562 0-1-.437-1-1V6c0-.531.438-1 1-1 .531 0 1 .469 1 1m-1 8h3c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-2v2c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-3c0-.531.438-1 1-1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '18fbe17654ce5597267b58bcc8c3c74e__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCompressMdFillIcon);
exports.default = ForwardRef;
