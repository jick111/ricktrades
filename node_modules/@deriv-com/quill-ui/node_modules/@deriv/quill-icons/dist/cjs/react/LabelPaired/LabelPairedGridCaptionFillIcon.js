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
const LabelPairedGridCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 5.188c0-.516.398-.938.938-.938h1.125a.94.94 0 0 1 .937.938v1.125c0 .539-.422.937-.937.937H1.187a.91.91 0 0 1-.937-.937zm0 3.75C.25 8.422.648 8 1.188 8h1.125a.94.94 0 0 1 .937.938v1.124c0 .54-.422.938-.937.938H1.187a.91.91 0 0 1-.937-.937zm3 3.75v1.124c0 .54-.422.938-.937.938H1.187a.91.91 0 0 1-.937-.937v-1.126c0-.515.398-.937.938-.937h1.125a.94.94 0 0 1 .937.938m.75-7.5c0-.516.398-.938.938-.938h1.125A.94.94 0 0 1 7 5.188v1.125c0 .539-.422.937-.937.937H4.938A.91.91 0 0 1 4 6.313zm3 3.75v1.124c0 .54-.422.938-.937.938H4.938A.91.91 0 0 1 4 10.063V8.937C4 8.423 4.398 8 4.938 8h1.125A.94.94 0 0 1 7 8.938m-3 3.75c0-.516.398-.938.938-.938h1.125a.94.94 0 0 1 .937.938v1.124c0 .54-.422.938-.937.938H4.938A.91.91 0 0 1 4 13.813zm6.75-7.5v1.125c0 .539-.422.937-.937.937H8.687a.91.91 0 0 1-.937-.937V5.188c0-.516.398-.938.938-.938h1.124a.94.94 0 0 1 .938.938m-3 3.75c0-.516.398-.938.938-.938h1.124a.94.94 0 0 1 .938.938v1.124c0 .54-.422.938-.937.938H8.687a.91.91 0 0 1-.937-.937zm3 3.75v1.124c0 .54-.422.938-.937.938H8.687a.91.91 0 0 1-.937-.937v-1.126c0-.515.398-.937.938-.937h1.124a.94.94 0 0 1 .938.938' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '47cf08c55432b27f07300bcb2b918ebc__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGridCaptionFillIcon);
exports.default = ForwardRef;
