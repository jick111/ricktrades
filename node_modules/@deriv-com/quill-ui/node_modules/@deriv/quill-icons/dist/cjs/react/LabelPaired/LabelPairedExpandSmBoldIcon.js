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
const LabelPairedExpandSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.094 4.625c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H1.687v2.406c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V5.28c0-.355.273-.656.656-.656zM.375 13.156c0-.355.273-.656.656-.656.356 0 .657.3.657.656v2.406h2.406c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H1.03a.63.63 0 0 1-.656-.656zm11.594-8.531c.355 0 .656.3.656.656v3.063c0 .383-.3.656-.656.656a.63.63 0 0 1-.656-.656V5.938H8.906a.63.63 0 0 1-.656-.657c0-.355.273-.656.656-.656zm-.656 8.531c0-.355.273-.656.656-.656.355 0 .656.3.656.656v3.063c0 .383-.3.656-.656.656H8.906a.63.63 0 0 1-.656-.656c0-.356.273-.657.656-.657h2.406z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c98d4182aa92b6146a1e2cce18e42df5__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExpandSmBoldIcon);
exports.default = ForwardRef;
