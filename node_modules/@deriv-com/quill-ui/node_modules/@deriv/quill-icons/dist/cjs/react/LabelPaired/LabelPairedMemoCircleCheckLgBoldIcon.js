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
const LabelPairedMemoCircleCheckLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 30, viewBox: '0 0 23 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.75 7.375A.64.64 0 0 0 2.125 8v15c0 .352.273.625.625.625h8.594a6.7 6.7 0 0 0 1.758 1.875H2.75A2.47 2.47 0 0 1 .25 23V8c0-1.367 1.094-2.5 2.5-2.5h10c1.367 0 2.5 1.133 2.5 2.5v5.273c-.703.196-1.328.47-1.875.86V8c0-.312-.312-.625-.625-.625zM4.938 10.5h5.625a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.937c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938m0 3.75h5.625a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.937c-.546 0-.937-.39-.937-.937 0-.508.39-.938.938-.938m0 3.75h1.875a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H4.938c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938m17.812 1.875c0 2.031-1.094 3.867-2.812 4.883-1.758 1.015-3.907 1.015-5.625 0a5.6 5.6 0 0 1-2.813-4.883 5.58 5.58 0 0 1 2.813-4.844c1.718-1.015 3.867-1.015 5.624 0 1.72 1.016 2.813 2.852 2.813 4.844m-3.008-1.68a.66.66 0 0 0-.898 0L16.5 20.578l-1.133-1.133a.66.66 0 0 0-.898 0 .66.66 0 0 0 0 .899l1.562 1.562a.66.66 0 0 0 .899 0l2.812-2.812a.66.66 0 0 0 0-.899' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3687f8f3ba86ee6e8c480befcb2f4033__a' },
            React.createElement("path", { d: 'M0 0h23v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMemoCircleCheckLgBoldIcon);
exports.default = ForwardRef;
