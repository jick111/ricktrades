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
const LabelPairedBriefcaseXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.625 8.25a.37.37 0 0 0-.375.375V10.5h7.5V8.625a.4.4 0 0 0-.375-.375zM6 8.625C6 7.219 7.172 6 8.625 6h6.75C16.781 6 18 7.219 18 8.625V10.5h3c1.64 0 3 1.36 3 3V18H0v-4.5c0-1.64 1.313-3 3-3h3zM24 19.5v6c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-6h9V21c0 .844.656 1.5 1.5 1.5h3c.797 0 1.5-.656 1.5-1.5v-1.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd8466f3c52b5cf047ce24629f955f2b7__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBriefcaseXlFillIcon);
exports.default = ForwardRef;
