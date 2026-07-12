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
const LabelPairedChartOhlcSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9 3.75a.47.47 0 0 1 .438.438V5.5h1.312a.47.47 0 0 1 .438.438.45.45 0 0 1-.438.437H9.438v9.188A.45.45 0 0 1 9 16a.43.43 0 0 1-.437-.437V14.25H7.25a.43.43 0 0 1-.437-.437.45.45 0 0 1 .437-.438h1.313V4.188A.45.45 0 0 1 9 3.75m5.688 1.75a.47.47 0 0 1 .437.438v5.687h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437h-1.313v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437V8.125h-1.312a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h1.312V5.938a.45.45 0 0 1 .438-.438M3.313 9a.47.47 0 0 1 .437.438v5.687h1.313a.47.47 0 0 1 .437.438.45.45 0 0 1-.437.437H3.75v1.313a.45.45 0 0 1-.437.437.43.43 0 0 1-.438-.437v-5.688H1.563a.43.43 0 0 1-.438-.437.45.45 0 0 1 .438-.438h1.312V9.438A.45.45 0 0 1 3.313 9' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '432a6454f9ac002e101fb523af475232__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartOhlcSmRegularIcon);
exports.default = ForwardRef;
