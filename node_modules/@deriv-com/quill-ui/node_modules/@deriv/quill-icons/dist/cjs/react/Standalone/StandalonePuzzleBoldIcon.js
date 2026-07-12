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
exports.StandalonePuzzleBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePuzzleBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M23.5 6.5C24.867 6.5 26 7.633 26 9v5a.64.64 0 0 1-.625.625h-2.031a.475.475 0 0 0-.469.469v.156c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-.156a.504.504 0 0 0-.469-.469H18.5a.617.617 0 0 1-.625-.625v-1.25c0-.312.273-.625.625-.625h.625c.664 0 1.25-.547 1.25-1.25 0-.664-.586-1.25-1.25-1.25H18.5A.617.617 0 0 1 17.875 9V7.125c0-.312.273-.625.625-.625zM6 15.875V11.5C6 10.133 7.094 9 8.5 9h5.625c.313 0 .625.313.625.625v2.031c0 .274.195.469.469.469h.156c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25h-.156a.475.475 0 0 0-.469.469v2.031a.64.64 0 0 1-.625.625h-1.25a.617.617 0 0 1-.625-.625V16.5c0-.664-.586-1.25-1.25-1.25-.703 0-1.25.586-1.25 1.25v.625a.64.64 0 0 1-.625.625h-1.25v5.938c0 .546.39.937.938.937h5.937v-1.406a.504.504 0 0 0-.469-.469h-.156c-.703 0-1.25-.547-1.25-1.25 0-.664.547-1.25 1.25-1.25h.156a.475.475 0 0 0 .469-.469v-1.406c0-.312.273-.625.625-.625h1.875c.313 0 .625.313.625.625V19c0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25v-.625c0-.312.273-.625.625-.625h1.875c.313 0 .625.313.625.625V24c0 1.406-1.133 2.5-2.5 2.5H8.813A2.8 2.8 0 0 1 6 23.688v-7.813' })));
exports.StandalonePuzzleBoldIcon = StandalonePuzzleBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePuzzleBoldIcon);
exports.default = ForwardRef;
