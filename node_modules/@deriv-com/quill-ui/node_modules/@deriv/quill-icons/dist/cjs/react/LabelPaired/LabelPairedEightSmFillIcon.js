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
const LabelPairedEightSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 22, viewBox: '0 0 9 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.438 8.125a3.5 3.5 0 0 1-.985 2.434c.848.656 1.422 1.668 1.422 2.816 0 1.941-1.586 3.5-3.5 3.5h-1.75a3.49 3.49 0 0 1-3.5-3.5c0-1.148.547-2.16 1.422-2.816-.629-.63-.984-1.477-.984-2.434 0-1.914 1.558-3.5 3.5-3.5h.875c1.914 0 3.5 1.586 3.5 3.5m-3.5 3.5H3.625c-.984 0-1.75.793-1.75 1.75 0 .984.766 1.75 1.75 1.75h1.75c.957 0 1.75-.766 1.75-1.75 0-.957-.793-1.75-1.75-1.75zm0-1.75c.957 0 1.75-.766 1.75-1.75 0-.957-.793-1.75-1.75-1.75h-.875c-.985 0-1.75.793-1.75 1.75 0 .984.765 1.75 1.75 1.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'acb8ba5de04c8b5813b41d7acc0cb975__a' },
            React.createElement("path", { d: 'M0 0h9v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedEightSmFillIcon);
exports.default = ForwardRef;
