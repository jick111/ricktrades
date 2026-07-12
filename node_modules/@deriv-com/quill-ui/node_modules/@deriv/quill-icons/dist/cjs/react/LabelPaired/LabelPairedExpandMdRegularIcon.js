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
const LabelPairedExpandMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.5 5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5H1v3.5c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5v-4c0-.25.219-.5.5-.5zM0 14.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5V18h3.5c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-4a.494.494 0 0 1-.5-.5zM13.5 5c.25 0 .5.25.5.5v4c0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5V6H9.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5zm-.5 9.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5v4c0 .281-.25.5-.5.5h-4a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5H13z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '24eabcc96b7dc40d28103d9bd500139c__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExpandMdRegularIcon);
exports.default = ForwardRef;
