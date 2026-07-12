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
const LabelPairedThreeLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 30, viewBox: '0 0 13 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 7.375c0-.312.273-.625.625-.625H11.5c.234 0 .469.156.547.43a.54.54 0 0 1-.156.664L4.938 14.25H7.75c2.734 0 5 2.266 5 5 0 2.773-2.266 5-5 5H3.727c-1.407 0-2.735-.781-3.36-2.07l-.078-.117a.64.64 0 0 1 .274-.86.64.64 0 0 1 .859.274l.078.156C1.93 22.493 2.79 23 3.727 23H7.75a3.751 3.751 0 0 0 0-7.5H3.375c-.273 0-.508-.156-.586-.39a.54.54 0 0 1 .156-.665L9.898 8H.875a.617.617 0 0 1-.625-.625' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '319b3ab357eba8adf804301435bbd015__a' },
            React.createElement("path", { d: 'M0 0h13v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedThreeLgRegularIcon);
exports.default = ForwardRef;
