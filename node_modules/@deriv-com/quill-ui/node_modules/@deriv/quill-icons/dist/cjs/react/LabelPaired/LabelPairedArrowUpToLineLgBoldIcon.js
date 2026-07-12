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
const LabelPairedArrowUpToLineLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 30, viewBox: '0 0 15 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.938 6.75h13.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H.938C.39 8.625 0 8.235 0 7.688c0-.508.39-.938.938-.938m7.226 5.313 5 5.312c.352.39.352.977-.039 1.328s-.977.352-1.328-.039l-3.36-3.594v8.242c0 .547-.43.938-.937.938-.547 0-.937-.39-.937-.937V15.07l-3.399 3.594c-.352.39-.937.39-1.328.04-.39-.352-.39-.938-.04-1.329l5-5.312c.196-.196.43-.313.704-.313.234 0 .508.117.664.313' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f65404c84bc0c86a067fb018da67720d__a' },
            React.createElement("path", { d: 'M0 0h15v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowUpToLineLgBoldIcon);
exports.default = ForwardRef;
