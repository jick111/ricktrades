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
const LabelPairedArrowDownAZCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.352 12.336c-.235-.211-.235-.563 0-.797.21-.21.562-.21.796 0l1.29 1.313v-8.04c0-.304.234-.562.562-.562a.57.57 0 0 1 .563.563v8.039l1.289-1.29a.513.513 0 0 1 .773 0 .513.513 0 0 1 0 .774l-2.25 2.25a.513.513 0 0 1-.773 0zM8.5 10.25h3c.21 0 .422.14.492.352a.5.5 0 0 1-.094.585l-2.156 2.438H11.5a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562h-3c-.234 0-.445-.117-.516-.328a.5.5 0 0 1 .094-.586l2.156-2.461H8.5a.54.54 0 0 1-.562-.562c0-.305.234-.563.562-.563m1.5-6c.21 0 .398.14.492.328l1.875 3.75c.14.281.024.61-.258.75a.555.555 0 0 1-.75-.258l-.328-.633H8.922l-.305.633a.555.555 0 0 1-.75.258.555.555 0 0 1-.258-.75l1.875-3.75A.58.58 0 0 1 10 4.25m-.516 2.813h1.008L10 6.078z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b1c586f496557fd4ab994628867f1d13__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowDownAZCaptionBoldIcon);
exports.default = ForwardRef;
