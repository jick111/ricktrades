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
const LabelPairedEyeXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.484 12.375C3.47 14.25 2.11 16.5 1.5 18c.61 1.5 1.969 3.75 3.984 5.625C7.5 25.5 10.172 27 13.5 27c3.281 0 5.953-1.5 7.969-3.375S24.844 19.5 25.5 18c-.656-1.5-2.016-3.75-4.031-5.625C19.453 10.5 16.78 9 13.5 9c-3.328 0-6 1.5-8.016 3.375M13.5 7.5c3.75 0 6.797 1.734 9 3.797 2.203 2.015 3.656 4.453 4.36 6.14.14.375.14.797 0 1.172-.704 1.641-2.157 4.078-4.36 6.141s-5.25 3.75-9 3.75c-3.797 0-6.844-1.687-9.047-3.75s-3.656-4.5-4.36-6.14a1.68 1.68 0 0 1 0-1.172c.704-1.688 2.157-4.125 4.36-6.141C6.656 9.234 9.703 7.5 13.5 7.5M9 18c0 1.64.844 3.094 2.25 3.938 1.36.796 3.094.796 4.5 0C17.11 21.094 18 19.64 18 18c0-1.594-.89-3.047-2.25-3.89-1.406-.797-3.14-.797-4.5 0C9.844 14.952 9 16.405 9 18m10.5 0c0 2.156-1.172 4.125-3 5.203-1.875 1.078-4.172 1.078-6 0A5.97 5.97 0 0 1 7.5 18a5.95 5.95 0 0 1 3-5.156c1.828-1.078 4.125-1.078 6 0 1.828 1.078 3 3.047 3 5.156' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c2ddb91e75c1442cd3904a984e794905__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEyeXlRegularIcon);
exports.default = ForwardRef;
