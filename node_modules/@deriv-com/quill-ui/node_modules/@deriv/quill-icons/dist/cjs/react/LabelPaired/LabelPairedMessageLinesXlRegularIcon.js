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
const LabelPairedMessageLinesXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9 25.5v2.25l4.594-3.422a1.48 1.48 0 0 1 .89-.328H21c.797 0 1.5-.656 1.5-1.5V9c0-.797-.703-1.5-1.5-1.5H3c-.844 0-1.5.703-1.5 1.5v13.5c0 .844.656 1.5 1.5 1.5h4.5c.797 0 1.5.703 1.5 1.5M3 6h18c1.64 0 3 1.36 3 3v13.5c0 1.688-1.36 3-3 3h-6.516l-5.812 4.36c-.235.187-.516.187-.797.093-.234-.14-.375-.375-.375-.703V25.5H3c-1.687 0-3-1.312-3-3V9c0-1.64 1.313-3 3-3m3.75 6.75h10.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H6.75A.74.74 0 0 1 6 13.5c0-.375.328-.75.75-.75m0 4.5h6c.375 0 .75.375.75.75 0 .422-.375.75-.75.75h-6A.74.74 0 0 1 6 18c0-.375.328-.75.75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e471b835f69ac2a06d7599d6f4c47aaf__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMessageLinesXlRegularIcon);
exports.default = ForwardRef;
