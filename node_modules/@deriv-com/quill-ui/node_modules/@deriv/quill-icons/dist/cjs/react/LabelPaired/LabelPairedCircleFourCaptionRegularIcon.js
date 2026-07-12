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
const LabelPairedCircleFourCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M11.25 9.5a5.23 5.23 0 0 0-2.625-4.523 5.14 5.14 0 0 0-5.25 0A5.18 5.18 0 0 0 .75 9.5a5.19 5.19 0 0 0 2.625 4.547c1.617.96 3.61.96 5.25 0A5.24 5.24 0 0 0 11.25 9.5M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m5.367-2.953c.211.07.305.281.211.469L4.29 10.25H6.75V8.375c0-.187.164-.375.375-.375.188 0 .375.188.375.375v1.875h.375c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H7.5v1.125c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11h-3c-.14 0-.258-.047-.328-.164a.33.33 0 0 1-.024-.328l1.5-3.75c.07-.211.282-.305.493-.211z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b1cab93699459b31caedff2f452a1617__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleFourCaptionRegularIcon);
exports.default = ForwardRef;
