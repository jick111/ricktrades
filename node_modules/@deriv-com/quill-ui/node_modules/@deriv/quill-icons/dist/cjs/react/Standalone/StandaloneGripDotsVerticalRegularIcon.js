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
exports.StandaloneGripDotsVerticalRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneGripDotsVerticalRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M13.5 10.25c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625m-2.5 0c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.874 0 .547.352.938.938.938 1.602 0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.876 0A1.87 1.87 0 0 1 11 10.25m2.5 6.25c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625m-2.5 0c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.874 0 .547.352.938.938.938 1.602 0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.876 0A1.87 1.87 0 0 1 11 16.5m1.875 6.875a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625m0-2.5c.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.875-.352.585-.938.937-1.602.937a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.875.35-.547.937-.938 1.64-.938M19.75 10.25c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625m-2.5 0c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.875 0 .546.352.937.938.937 1.602 0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.875 0a1.87 1.87 0 0 1-.938-1.64m1.875 6.875a.64.64 0 0 0 .625-.625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625m0-2.5c.664 0 1.25.39 1.602.938.351.585.351 1.328 0 1.874-.352.586-.938.938-1.602.938a1.87 1.87 0 0 1-1.64-.937c-.352-.547-.352-1.29 0-1.875.35-.547.937-.938 1.64-.938m.625 8.125c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625m-2.5 0c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.875 0 .546.352.937.938.937 1.602 0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.875 0a1.87 1.87 0 0 1-.938-1.64' })));
exports.StandaloneGripDotsVerticalRegularIcon = StandaloneGripDotsVerticalRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneGripDotsVerticalRegularIcon);
exports.default = ForwardRef;
