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
exports.StandalonePuzzleRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePuzzleRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M18.5 6.5h5C24.867 6.5 26 7.633 26 9v4.375c0 .703-.586 1.25-1.25 1.25H23.5c0 1.055-.86 1.875-1.875 1.875a1.85 1.85 0 0 1-1.875-1.875H18.5c-.703 0-1.25-.547-1.25-1.25v-.937c0-.665.547-1.25 1.25-1.25h.625a.64.64 0 0 0 .625-.626c0-.312-.312-.624-.625-.624H18.5c-.703 0-1.25-.547-1.25-1.25V7.75c0-.664.547-1.25 1.25-1.25m0 1.25v.938h.625c1.016 0 1.875.859 1.875 1.874 0 1.055-.86 1.876-1.875 1.876H18.5v.937h1.875c.313 0 .625.313.625.625v.625c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625V14c0-.312.273-.625.625-.625h1.875V9c0-.664-.586-1.25-1.25-1.25zM8.5 9h5.625c.664 0 1.25.586 1.25 1.25v6.875h1.25c.664 0 1.25.586 1.25 1.25V19c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625v-.625c0-.664.547-1.25 1.25-1.25h1.875c.664 0 1.25.586 1.25 1.25V24c0 1.406-1.133 2.5-2.5 2.5H8.5A2.47 2.47 0 0 1 6 24V11.5C6 10.133 7.094 9 8.5 9m5.625 1.25H8.5c-.703 0-1.25.586-1.25 1.25v5.625h1.875V16.5c0-1.016.82-1.875 1.875-1.875 1.016 0 1.875.86 1.875 1.875v.625h1.25zm-5 8.125H7.25V24c0 .703.547 1.25 1.25 1.25h5.625v-1.875H13.5a1.85 1.85 0 0 1-1.875-1.875c0-1.016.82-1.875 1.875-1.875h.625v-1.25h-1.25c-.703 0-1.25-.547-1.25-1.25V16.5c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v.625c0 .703-.586 1.25-1.25 1.25m6.25 5v1.875H21c.664 0 1.25-.547 1.25-1.25v-5.625h-1.875V19c0 1.055-.86 1.875-1.875 1.875A1.85 1.85 0 0 1 16.625 19v-.625h-1.25v1.25c0 .703-.586 1.25-1.25 1.25H13.5a.64.64 0 0 0-.625.625c0 .352.273.625.625.625h.625c.664 0 1.25.586 1.25 1.25' })));
exports.StandalonePuzzleRegularIcon = StandalonePuzzleRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePuzzleRegularIcon);
exports.default = ForwardRef;
