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
const LabelPairedMapLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 30, viewBox: '0 0 23 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M22.32 6.945c.274.157.43.47.43.742v13.125c0 .391-.273.743-.625.899l-6.562 2.5a.86.86 0 0 1-.626 0L7.75 21.828 1.5 24.211a.86.86 0 0 1-.86-.117c-.273-.157-.39-.469-.39-.782V10.188c0-.39.234-.703.586-.859l6.562-2.5a.86.86 0 0 1 .625 0l7.188 2.383 6.25-2.383a.86.86 0 0 1 .86.117M2.125 10.852v11.132l4.688-1.797V9.056zm12.188 11.171V10.891L8.686 9.016v11.132zm1.874-.039 4.688-1.797V9.056l-4.687 1.797z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '79cd3d2f72c4fbfff183b4d229092031__a' },
            React.createElement("path", { d: 'M0 0h23v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMapLgBoldIcon);
exports.default = ForwardRef;
