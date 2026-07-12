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
const LabelPairedChartOhlcSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9 3.75c.355 0 .656.3.656.656V5.5h1.094c.355 0 .656.3.656.656 0 .383-.3.657-.656.657H9.656v8.53c0 .384-.3.657-.656.657a.63.63 0 0 1-.656-.656V14.25H7.25a.63.63 0 0 1-.656-.656c0-.356.273-.656.656-.656h1.094V4.406c0-.355.273-.656.656-.656m5.688 1.75c.355 0 .656.3.656.656v5.032h1.094c.355 0 .656.3.656.656 0 .383-.301.656-.657.656h-1.093v1.094c0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656V8.563h-1.094a.63.63 0 0 1-.656-.657c0-.355.274-.656.656-.656h1.094V6.156c0-.355.274-.656.656-.656M3.313 9c.355 0 .656.3.656.656v5.031h1.094c.355 0 .656.301.656.657 0 .383-.301.656-.657.656H3.97v1.094c0 .383-.301.656-.656.656a.63.63 0 0 1-.657-.656v-5.032H1.562a.63.63 0 0 1-.656-.656c0-.355.274-.656.657-.656h1.093V9.656c0-.355.274-.656.656-.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '915a7caa4dd46d3ef8ede5adb4014828__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartOhlcSmBoldIcon);
exports.default = ForwardRef;
