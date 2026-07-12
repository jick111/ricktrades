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
exports.StandaloneChartTradingviewRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChartTradingviewRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.238 24.664V8.258a.6.6 0 0 1 .586-.586c.352 0 .586.273.586.586v15.976c0 .625.508 1.094 1.133 1.094h13.594a.6.6 0 0 1 .586.586.575.575 0 0 1-.586.586H9.074a1.81 1.81 0 0 1-1.836-1.836m16.328-9.766a.704.704 0 0 0-.859 0l-6.055 6.094-1.523-1.523c-.469-.469-1.211-.469-1.64 0l-2.54 2.5a.613.613 0 0 0 0 .86.566.566 0 0 0 .82 0l2.54-2.54 1.523 1.523c.469.47 1.211.47 1.64 0l6.094-6.054a.613.613 0 0 0 0-.86m-6.484-4.023c0-.43-.39-.82-.86-.82-.468 0-.859.39-.859.82 0 .469.39.82.86.82.468 0 .859-.351.859-.82m.664-.82-1.758 4.687h1.29l1.718-4.687zm-5.781 0v1.054H13.8v3.633h1.133v-4.687z' })));
exports.StandaloneChartTradingviewRegularIcon = StandaloneChartTradingviewRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChartTradingviewRegularIcon);
exports.default = ForwardRef;
