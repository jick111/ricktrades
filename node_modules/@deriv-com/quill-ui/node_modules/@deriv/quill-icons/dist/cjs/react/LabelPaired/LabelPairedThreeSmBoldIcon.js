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
const LabelPairedThreeSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.125 5.281c0-.355.273-.656.656-.656h7c.246 0 .492.164.602.438.11.246.027.519-.164.71L4.145 9.656h1.12c1.97 0 3.61 1.64 3.61 3.61 0 1.996-1.64 3.609-3.61 3.609H2.778a2.87 2.87 0 0 1-2.543-1.559l-.054-.109a.647.647 0 0 1 .3-.875.647.647 0 0 1 .875.3l.055.083c.246.52.793.848 1.367.848h2.489a2.293 2.293 0 0 0 2.297-2.297 2.31 2.31 0 0 0-2.297-2.297H2.53a.69.69 0 0 1-.629-.41.69.69 0 0 1 .164-.711l4.075-3.91H.78a.63.63 0 0 1-.656-.657' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8cc1fb0e2747e8fb0eb5c68b18059f57__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedThreeSmBoldIcon);
exports.default = ForwardRef;
