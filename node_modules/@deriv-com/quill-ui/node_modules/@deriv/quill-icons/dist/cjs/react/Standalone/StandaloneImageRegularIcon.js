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
exports.StandaloneImageRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneImageRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M8.5 9c-.703 0-1.25.586-1.25 1.25v9.14l2.617-2.656a1.63 1.63 0 0 1 2.227 0l2.656 2.657 5.117-5.157a1.63 1.63 0 0 1 2.227 0l2.656 2.657V10.25c0-.664-.586-1.25-1.25-1.25zM7.25 21.148v1.602c0 .703.547 1.25 1.25 1.25h1.602l3.75-3.75-2.657-2.617a.307.307 0 0 0-.43 0zm13.945-6.015a.307.307 0 0 0-.43 0L11.86 24H23.5c.664 0 1.25-.547 1.25-1.25v-4.102zM6 10.25c0-1.367 1.094-2.5 2.5-2.5h15c1.367 0 2.5 1.133 2.5 2.5v12.5c0 1.406-1.133 2.5-2.5 2.5h-15a2.47 2.47 0 0 1-2.5-2.5zm6.25 1.875c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625m-2.5 0c0-.664.352-1.25.938-1.602.546-.351 1.289-.351 1.874 0 .547.352.938.938.938 1.602 0 .703-.39 1.29-.937 1.64-.586.352-1.329.352-1.876 0a1.87 1.87 0 0 1-.937-1.64' })));
exports.StandaloneImageRegularIcon = StandaloneImageRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneImageRegularIcon);
exports.default = ForwardRef;
