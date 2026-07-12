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
const LabelPairedLinkSimpleLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 30, viewBox: '0 0 23 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 15.5A6.243 6.243 0 0 1 6.5 9.25h2.813a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H6.5c-2.422 0-4.375 1.992-4.375 4.375A4.37 4.37 0 0 0 6.5 19.875h2.813a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H6.5A6.22 6.22 0 0 1 .25 15.5m22.5 0a6.243 6.243 0 0 1-6.25 6.25h-2.812c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938H16.5c2.383 0 4.375-1.953 4.375-4.375 0-2.383-1.992-4.375-4.375-4.375h-2.812c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938H16.5c3.438 0 6.25 2.813 6.25 6.25m-15.312-.937h8.125a.95.95 0 0 1 .937.937c0 .547-.43.938-.937.938H7.437c-.546 0-.937-.391-.937-.938 0-.508.39-.937.938-.937' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '1533a3297230d1b1db8e4da3942eb2e6__a' },
            React.createElement("path", { d: 'M0 0h23v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLinkSimpleLgBoldIcon);
exports.default = ForwardRef;
