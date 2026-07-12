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
const LabelPairedArrowUpToLineMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 24, viewBox: '0 0 12 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1 5h10c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1m5.688 4.313 4 4a.964.964 0 0 1 0 1.406.964.964 0 0 1-1.407 0L7 12.438V18c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-5.562l-2.312 2.28a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405l4-4a.964.964 0 0 1 1.407 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a55d24ae2fed9c27e3390c80472fe809__a' },
            React.createElement("path", { d: 'M0 0h12v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpToLineMdFillIcon);
exports.default = ForwardRef;
