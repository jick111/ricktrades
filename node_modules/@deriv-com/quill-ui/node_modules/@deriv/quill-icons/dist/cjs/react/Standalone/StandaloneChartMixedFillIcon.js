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
exports.StandaloneChartMixedFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChartMixedFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'm25.531 9.977-6.25 5c-.468.39-1.093.39-1.562.039L13.5 11.852l-5.469 4.375a1.245 1.245 0 0 1-1.758-.196c-.43-.508-.351-1.328.196-1.758l6.25-5c.43-.351 1.054-.351 1.523 0l4.219 3.165 5.508-4.415c.508-.43 1.328-.312 1.758.196.43.547.312 1.328-.196 1.758M12.25 16.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25V24c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25zm-5 3.75c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25V24c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25zm11.25-2.5c.664 0 1.25.586 1.25 1.25v5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-5c0-.664.547-1.25 1.25-1.25m3.75-1.25c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25V24c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25z' })));
exports.StandaloneChartMixedFillIcon = StandaloneChartMixedFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChartMixedFillIcon);
exports.default = ForwardRef;
