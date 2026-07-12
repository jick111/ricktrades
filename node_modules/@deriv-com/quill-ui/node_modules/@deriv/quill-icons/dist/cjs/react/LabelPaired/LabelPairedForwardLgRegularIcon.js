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
const LabelPairedForwardLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M18.516 15.5 10 9.328v12.383zM9.922 8c.234 0 .469.078.664.234l9.023 6.524c.235.195.391.469.391.742 0 .313-.156.586-.39.781l-9.024 6.524c-.195.117-.43.195-.664.195a1.15 1.15 0 0 1-1.172-1.172v-4.023l-6.914 5c-.195.117-.43.195-.664.195A1.15 1.15 0 0 1 0 21.828V9.172C0 8.547.508 8 1.172 8c.234 0 .469.078.664.234l6.914 5V9.172C8.75 8.547 9.258 8 9.922 8M8.75 16.281v-1.523l-7.5-5.43v12.383z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4becb933281679e3e88a54e2faaea872__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedForwardLgRegularIcon);
exports.default = ForwardRef;
