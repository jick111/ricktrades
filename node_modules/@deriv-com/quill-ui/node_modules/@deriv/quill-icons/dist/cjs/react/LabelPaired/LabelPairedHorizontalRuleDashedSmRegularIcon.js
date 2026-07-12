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
const LabelPairedHorizontalRuleDashedSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 10.75a.45.45 0 0 1 .438-.437h2.187a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438H.688a.43.43 0 0 1-.438-.438m4.813 0a.45.45 0 0 1 .437-.437h2.188a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438H5.5a.43.43 0 0 1-.437-.438m4.812 0a.45.45 0 0 1 .438-.437H12.5a.47.47 0 0 1 .438.437.45.45 0 0 1-.438.438h-2.187a.43.43 0 0 1-.438-.438m4.813 0a.45.45 0 0 1 .437-.437h2.188a.47.47 0 0 1 .437.437.45.45 0 0 1-.437.438h-2.188a.43.43 0 0 1-.437-.438' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c34c27324fcd09f2bc8266909a7b0783__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedHorizontalRuleDashedSmRegularIcon);
exports.default = ForwardRef;
