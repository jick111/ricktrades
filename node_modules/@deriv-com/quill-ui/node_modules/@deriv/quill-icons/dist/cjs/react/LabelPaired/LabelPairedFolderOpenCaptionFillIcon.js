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
const LabelPairedFolderOpenCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.313 8.75.25 12.313V5.75c0-.82.656-1.5 1.5-1.5h2.742c.399 0 .774.164 1.055.445l.633.633c.28.281.656.422 1.054.422H10c.82 0 1.5.68 1.5 1.5V8H3.625c-.54 0-1.031.281-1.312.75m.656.375a.75.75 0 0 1 .656-.375H13c.258 0 .516.164.633.398a.72.72 0 0 1 0 .75l-2.625 4.5a.77.77 0 0 1-.633.352H1a.75.75 0 0 1-.656-.375.72.72 0 0 1 0-.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '77377690641744463606b0faa59b3e84__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFolderOpenCaptionFillIcon);
exports.default = ForwardRef;
