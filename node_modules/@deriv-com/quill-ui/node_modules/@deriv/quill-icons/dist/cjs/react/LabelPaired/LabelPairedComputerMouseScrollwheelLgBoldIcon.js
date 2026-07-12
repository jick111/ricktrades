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
const LabelPairedComputerMouseScrollwheelLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 30, viewBox: '0 0 15 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.125 19.25v-7.5c0-2.383-1.992-4.375-4.375-4.375h-2.5c-2.422 0-4.375 1.992-4.375 4.375v7.5a4.37 4.37 0 0 0 4.375 4.375h2.5c2.383 0 4.375-1.953 4.375-4.375M0 11.75A6.243 6.243 0 0 1 6.25 5.5h2.5c3.438 0 6.25 2.813 6.25 6.25v7.5a6.243 6.243 0 0 1-6.25 6.25h-2.5A6.22 6.22 0 0 1 0 19.25zm7.5-2.5c.664 0 1.25.586 1.25 1.25v1.25c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V10.5c0-.664.547-1.25 1.25-1.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8396dfbdde21bdfab03aef5ba4efb6cc__a' },
            React.createElement("path", { d: 'M0 0h15v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedComputerMouseScrollwheelLgBoldIcon);
exports.default = ForwardRef;
