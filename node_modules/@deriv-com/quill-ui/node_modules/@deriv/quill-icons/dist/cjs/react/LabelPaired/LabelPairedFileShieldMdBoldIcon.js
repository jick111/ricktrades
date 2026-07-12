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
const LabelPairedFileShieldMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 18.5h7.688c.343.469.75.906 1.25 1.281-.282.157-.626.219-.938.219H2c-1.125 0-2-.875-2-2V6c0-1.094.875-2 2-2h5.156c.532 0 1.032.219 1.407.594l2.843 2.843c.375.375.594.875.594 1.407v1.625l-1.5.625V9H8c-.562 0-1-.437-1-1V5.5H2c-.281 0-.5.25-.5.5v12c0 .281.219.5.5.5m11.219-7.437a.78.78 0 0 1 .531 0l3.75 1.5c.313.124.5.406.5.687 0 2-.812 5.281-4.219 6.719a.97.97 0 0 1-.594 0C9.782 18.53 9 15.25 9 13.25a.78.78 0 0 1 .469-.687zm3.25 2.687L13.5 12.563v5.874c2.125-1.03 2.844-3.093 2.969-4.687' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b657fe70db0c49b36ed258595eb04056__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileShieldMdBoldIcon);
exports.default = ForwardRef;
