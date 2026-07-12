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
const LabelPairedChartLineMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1 5.5v11c0 .844.656 1.5 1.5 1.5h13c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-13A2.47 2.47 0 0 1 0 16.5v-11c0-.25.219-.5.5-.5.25 0 .5.25.5.5m13.844 3.375-4.5 4.5a.53.53 0 0 1-.719 0L7 10.719l-3.156 3.156a.53.53 0 0 1-.719 0 .53.53 0 0 1 0-.719l3.5-3.5a.53.53 0 0 1 .719 0L10 12.312l4.125-4.156a.53.53 0 0 1 .719 0 .53.53 0 0 1 0 .719' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '689361cdb9d57b562ecede12ca9d1c01__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineMdRegularIcon);
exports.default = ForwardRef;
