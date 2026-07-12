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
const LabelPairedMagnifyingGlassPlusXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.75 7.5c-2.953 0-5.672 1.594-7.172 4.125-1.453 2.578-1.453 5.719 0 8.25A8.27 8.27 0 0 0 9.75 24a8.25 8.25 0 0 0 7.125-4.125c1.453-2.531 1.453-5.672 0-8.25C15.375 9.094 12.656 7.5 9.75 7.5m0 18C4.36 25.5 0 21.14 0 15.75 0 10.406 4.36 6 9.75 6c5.344 0 9.75 4.406 9.75 9.75 0 2.438-.89 4.64-2.344 6.375l6.61 6.61c.28.28.28.796 0 1.078-.282.28-.797.28-1.078 0l-6.61-6.657c-1.687 1.5-3.937 2.344-6.328 2.344M9 20.25V16.5H5.25a.74.74 0 0 1-.75-.75c0-.375.328-.75.75-.75H9v-3.75c0-.375.328-.75.75-.75.375 0 .75.375.75.75V15h3.75c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H10.5v3.75c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b5d5a519967bee8da565b0d2ecc371f9__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMagnifyingGlassPlusXlRegularIcon);
exports.default = ForwardRef;
