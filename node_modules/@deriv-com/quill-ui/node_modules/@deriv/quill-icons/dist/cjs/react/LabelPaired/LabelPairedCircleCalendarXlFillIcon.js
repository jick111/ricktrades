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
const LabelPairedCircleCalendarXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12 30c-4.312 0-8.25-2.25-10.406-6-2.157-3.703-2.157-8.25 0-12C3.75 8.297 7.688 6 12 6c4.266 0 8.203 2.297 10.36 6 2.156 3.75 2.156 8.297 0 12A11.91 11.91 0 0 1 12 30M9.75 10.5c-.422 0-.75.375-.75.75V12H7.5c-.844 0-1.5.703-1.5 1.5V15h12v-1.5c0-.797-.703-1.5-1.5-1.5H15v-.75c0-.375-.375-.75-.75-.75-.422 0-.75.375-.75.75V12h-3v-.75c0-.375-.375-.75-.75-.75M6 22.5c0 .844.656 1.5 1.5 1.5h9c.797 0 1.5-.656 1.5-1.5v-6H6z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'cc661288d49d979c9438d1bc760ebfe6__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleCalendarXlFillIcon);
exports.default = ForwardRef;
