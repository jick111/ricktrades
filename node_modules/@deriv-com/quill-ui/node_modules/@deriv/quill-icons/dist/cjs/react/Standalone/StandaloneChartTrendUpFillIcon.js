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
exports.StandaloneChartTrendUpFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChartTrendUpFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M27.797 6.656c.625.313.86 1.055.547 1.68l-3.75 7.5c-.196.43-.625.664-1.094.664h-5.508l-4.648 9.336a1.24 1.24 0 0 1-1.68.547l-7.5-3.75a1.24 1.24 0 0 1-.547-1.68 1.24 1.24 0 0 1 1.68-.547l6.367 3.203 4.453-8.906c.195-.43.625-.703 1.133-.703h5.469l3.398-6.797a1.24 1.24 0 0 1 1.68-.547' })));
exports.StandaloneChartTrendUpFillIcon = StandaloneChartTrendUpFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChartTrendUpFillIcon);
exports.default = ForwardRef;
