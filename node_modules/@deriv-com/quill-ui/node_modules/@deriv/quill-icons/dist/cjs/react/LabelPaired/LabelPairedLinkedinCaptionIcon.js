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
const LabelPairedLinkedinCaptionIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10 4.25c.398 0 .75.352.75.773V14c0 .422-.352.75-.75.75H.977A.736.736 0 0 1 .25 14V5.023c0-.421.328-.773.727-.773zm-6.586 9V8.258H1.867v4.992zm-.773-5.695a.89.89 0 0 0 .89-.89c0-.493-.398-.915-.89-.915a.915.915 0 0 0-.914.914c0 .492.398.89.914.89M9.25 13.25v-2.742c0-1.336-.305-2.39-1.875-2.39-.75 0-1.266.421-1.477.82h-.023v-.68H4.398v4.992h1.547v-2.46c0-.657.117-1.29.938-1.29.797 0 .797.75.797 1.313v2.437z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'aa0a4f1caaa149c1a4e0e45ef8ffb6f1__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLinkedinCaptionIcon);
exports.default = ForwardRef;
