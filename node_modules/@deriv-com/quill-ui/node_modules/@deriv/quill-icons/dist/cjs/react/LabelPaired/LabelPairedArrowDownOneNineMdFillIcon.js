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
const LabelPairedArrowDownOneNineMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14.063 5.188c.28.218.437.5.437.812v3h.5c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-3c-.562 0-1-.437-1-1 0-.531.438-1 1-1h.5V7.406l-.187.063a1.054 1.054 0 0 1-1.282-.625 1.054 1.054 0 0 1 .625-1.282l1.5-.5c.313-.093.656-.062.906.125M5 19c-.281 0-.562-.094-.75-.312l-2.75-3a.99.99 0 0 1 .063-1.407.99.99 0 0 1 1.406.063L4 15.438V6c0-.531.438-1 1-1 .531 0 1 .469 1 1v9.438l1-1.094a.99.99 0 0 1 1.406-.063c.406.375.438 1 .063 1.406l-2.75 3A.9.9 0 0 1 5 19m8.063-5.406c-.5.25-.72.844-.47 1.344.22.5.813.718 1.313.468a.96.96 0 0 0 .469-1.312.997.997 0 0 0-1.312-.5m-.407 3.531a2.69 2.69 0 0 1-1.906-2.594 2.734 2.734 0 0 1 2.75-2.75c1.5 0 2.75 1.219 2.75 2.75 0 .719-.25 1.438-.687 2.031l-1.532 2.063a.96.96 0 0 1-1.375.188c-.469-.313-.562-.938-.219-1.407z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '03909794aa92c298c758214c9f3e740c__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownOneNineMdFillIcon);
exports.default = ForwardRef;
