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
exports.StandaloneChartLineRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneChartLineRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M7.25 8.375v13.75C7.25 23.18 8.07 24 9.125 24h16.25c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H9.125C7.367 25.25 6 23.883 6 22.125V8.375c0-.312.273-.625.625-.625.313 0 .625.313.625.625m17.305 4.219-5.625 5.625a.66.66 0 0 1-.899 0l-3.281-3.32-3.945 3.945a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l4.375-4.375a.66.66 0 0 1 .899 0l3.32 3.32 5.156-5.195a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899' })));
exports.StandaloneChartLineRegularIcon = StandaloneChartLineRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneChartLineRegularIcon);
exports.default = ForwardRef;
