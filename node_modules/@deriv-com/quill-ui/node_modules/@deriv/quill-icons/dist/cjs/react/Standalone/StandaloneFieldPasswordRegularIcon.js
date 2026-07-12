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
exports.StandaloneFieldPasswordRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneFieldPasswordRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 10.875c-1.055 0-1.875.86-1.875 1.875v7.5c0 1.055.82 1.875 1.875 1.875h17.5c1.016 0 1.875-.82 1.875-1.875v-7.5c0-1.016-.86-1.875-1.875-1.875zM4.125 12.75A3.11 3.11 0 0 1 7.25 9.625h17.5a3.134 3.134 0 0 1 3.125 3.125v7.5a3.11 3.11 0 0 1-3.125 3.125H7.25c-1.758 0-3.125-1.367-3.125-3.125zm16.25 7.5a.617.617 0 0 1-.625-.625v-6.25c0-.312.273-.625.625-.625.313 0 .625.313.625.625v6.25a.64.64 0 0 1-.625.625M8.5 16.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25m3.75 0c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25m3.75 0c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25' })));
exports.StandaloneFieldPasswordRegularIcon = StandaloneFieldPasswordRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneFieldPasswordRegularIcon);
exports.default = ForwardRef;
