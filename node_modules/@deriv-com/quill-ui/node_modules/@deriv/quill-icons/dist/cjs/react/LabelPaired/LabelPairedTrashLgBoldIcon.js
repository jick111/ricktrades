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
const LabelPairedTrashLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.164 7.375c-.117 0-.195.078-.273.156l-.743 1.094h5.665l-.743-1.094a.33.33 0 0 0-.273-.156zm6.914 1.25h2.735a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937h-.47l-.937 12.695c-.117 1.328-1.172 2.305-2.5 2.305H5.055c-1.328 0-2.383-.977-2.5-2.305L1.617 10.5h-.43c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938h2.695l1.445-2.148A2.24 2.24 0 0 1 7.164 5.5h3.633c.742 0 1.445.39 1.836.977zm.39 1.875H3.493l.938 12.578c.039.313.312.547.625.547h7.851a.63.63 0 0 0 .625-.547z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2faedde92e1f817a21a07b5b673306a8__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTrashLgBoldIcon);
exports.default = ForwardRef;
