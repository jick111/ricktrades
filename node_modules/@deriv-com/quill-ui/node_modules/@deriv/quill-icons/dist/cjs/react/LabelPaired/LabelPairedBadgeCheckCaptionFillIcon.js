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
const LabelPairedBadgeCheckCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6 3.5a2.23 2.23 0 0 1 1.969 1.219 2.23 2.23 0 0 1 2.273.539c.61.61.797 1.5.54 2.273A2.23 2.23 0 0 1 12 9.5c0 .867-.492 1.617-1.219 1.992.258.774.07 1.64-.539 2.25-.61.61-1.5.797-2.273.563A2.21 2.21 0 0 1 6 15.5a2.22 2.22 0 0 1-1.992-1.195 2.25 2.25 0 0 1-2.25-.563 2.25 2.25 0 0 1-.563-2.25A2.22 2.22 0 0 1 0 9.5c0-.844.469-1.594 1.195-1.969a2.29 2.29 0 0 1 .563-2.273 2.19 2.19 0 0 1 2.25-.54A2.24 2.24 0 0 1 6 3.5m2.648 4.898a.55.55 0 0 0 0-.773c-.234-.234-.585-.234-.796 0L5.25 10.227 4.148 9.125c-.234-.234-.585-.234-.796 0a.513.513 0 0 0 0 .773l1.5 1.5c.21.235.562.235.796 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1a588564a7081de0de7f497cf508fde7__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBadgeCheckCaptionFillIcon);
exports.default = ForwardRef;
