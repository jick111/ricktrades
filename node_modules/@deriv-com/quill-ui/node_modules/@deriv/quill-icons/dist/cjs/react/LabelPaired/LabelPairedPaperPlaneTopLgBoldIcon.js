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
const LabelPairedPaperPlaneTopLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 21, height: 30, viewBox: '0 0 21 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.695 14.563h9.766L3.039 9.25zm0 1.874L3.04 21.79l12.422-5.352zM2.22 6.868l17.5 7.5c.468.195.781.664.781 1.172 0 .469-.312.938-.781 1.133l-17.5 7.5a1.27 1.27 0 0 1-1.406-.313c-.352-.351-.43-.937-.196-1.406L4.094 15.5.617 8.586A1.31 1.31 0 0 1 .813 7.14a1.33 1.33 0 0 1 1.406-.274' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f5c30448c39dc21679eb53e2d0df059a__a' },
            React.createElement("path", { d: 'M0 0h21v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPaperPlaneTopLgBoldIcon);
exports.default = ForwardRef;
