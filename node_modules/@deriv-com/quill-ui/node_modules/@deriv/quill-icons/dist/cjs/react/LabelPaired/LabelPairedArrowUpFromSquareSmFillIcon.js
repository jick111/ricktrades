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
const LabelPairedArrowUpFromSquareSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm7.602 4.023 2.625 2.625a.843.843 0 0 1 0 1.23.843.843 0 0 1-1.23 0l-1.122-1.12V12.5c0 .492-.41.875-.875.875a.864.864 0 0 1-.875-.875V6.758l-1.148 1.12a.843.843 0 0 1-1.23 0 .843.843 0 0 1 0-1.23L6.37 4.023a.843.843 0 0 1 1.23 0M1.75 6.813v8.75c0 .246.191.437.438.437h9.625a.45.45 0 0 0 .437-.437v-8.75a.47.47 0 0 0-.437-.438h-.22a.864.864 0 0 1-.874-.875c0-.465.383-.875.875-.875h.219c1.203 0 2.187.984 2.187 2.188v8.75c0 1.23-.984 2.187-2.187 2.187H2.188A2.16 2.16 0 0 1 0 15.563v-8.75c0-1.204.957-2.188 2.188-2.188h.218a.9.9 0 0 1 .875.875c0 .492-.41.875-.875.875h-.219a.45.45 0 0 0-.437.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a81ec6c18c2819778e8835da8b01ad68__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpFromSquareSmFillIcon);
exports.default = ForwardRef;
