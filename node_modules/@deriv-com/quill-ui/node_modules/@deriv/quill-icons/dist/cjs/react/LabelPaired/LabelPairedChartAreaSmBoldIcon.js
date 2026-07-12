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
const LabelPairedChartAreaSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.313 5.281v9.625c0 .383.273.656.656.656h11.375c.355 0 .656.301.656.657 0 .383-.3.656-.656.656H1.969A1.96 1.96 0 0 1 0 14.906V5.281c0-.355.273-.656.656-.656.356 0 .657.3.657.656M7.82 9.93 6.125 8.234l-2.187 2.188v2.515h7.874v-2.132L10.419 9.19l-.766.739a1.287 1.287 0 0 1-1.832 0M8.75 9l.902-.902.164-.164a.885.885 0 0 1 1.286.054l1.695 1.969c.191.246.328.547.328.848v2.57c0 .492-.41.875-.875.875H3.5a.864.864 0 0 1-.875-.875v-2.953c0-.328.137-.684.383-.93l2.488-2.488a.89.89 0 0 1 1.23 0L7.82 8.098z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8ddbd705d8be7f82f6a6e6fef3f4e820__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartAreaSmBoldIcon);
exports.default = ForwardRef;
