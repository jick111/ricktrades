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
const LabelPairedMoonSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 22, viewBox: '0 0 11 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.445 5.582a5.255 5.255 0 0 0-4.32 5.168c0 2.926 2.324 5.25 5.223 5.25.93 0 1.804-.246 2.57-.656-2.898-.246-5.195-2.707-5.195-5.688a5.68 5.68 0 0 1 1.722-4.074m1.805-.574a.39.39 0 0 1-.191.465 4.802 4.802 0 0 0 2.352 8.996c.273 0 .546 0 .82-.055.19-.027.382.055.464.219.082.191.055.383-.082.52a6.08 6.08 0 0 1-4.265 1.722C2.984 16.875.25 14.141.25 10.75c0-3.363 2.734-6.125 6.098-6.125.164 0 .355.027.52.027.19.028.355.164.382.356' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'dfea7f3328f8e715b57c72802ca7592b__a' },
            React.createElement("path", { d: 'M0 0h11v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMoonSmRegularIcon);
exports.default = ForwardRef;
