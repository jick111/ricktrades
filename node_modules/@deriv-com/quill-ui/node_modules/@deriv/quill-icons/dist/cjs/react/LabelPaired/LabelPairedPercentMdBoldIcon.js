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
const LabelPairedPercentMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 24, viewBox: '0 0 12 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm11.531 7.531-10.031 10a.684.684 0 0 1-1.031 0c-.313-.281-.313-.75 0-1.062l10-9.969c.281-.312.75-.312 1.062 0a.736.736 0 0 1 0 1.031M3.5 8c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 .5 8c0-.531.281-1 .75-1.281.438-.282 1.031-.282 1.5 0 .438.281.75.75.75 1.281m8 8c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 8.5 16c0-.531.281-1 .75-1.281.438-.281 1.031-.281 1.5 0 .438.281.75.75.75 1.281' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6576df8fc10247fd33e640aca063c07c__a' },
            React.createElement("path", { d: 'M0 0h12v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPercentMdBoldIcon);
exports.default = ForwardRef;
