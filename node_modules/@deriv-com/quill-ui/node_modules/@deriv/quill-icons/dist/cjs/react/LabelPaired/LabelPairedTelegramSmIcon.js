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
const LabelPairedTelegramSmIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7 3.969c3.719 0 6.781 3.062 6.781 6.781 0 3.746-3.062 6.781-6.781 6.781A6.78 6.78 0 0 1 .219 10.75C.219 7.031 3.254 3.969 7 3.969m3.117 4.62a.46.46 0 0 0 0-.273c0-.054-.055-.136-.082-.164-.082-.082-.219-.082-.273-.082-.246 0-.657.137-2.543.93-.657.273-1.969.82-3.938 1.695-.328.137-.492.246-.52.383-.027.219.329.3.739.438.355.109.82.246 1.066.246.22 0 .465-.082.739-.274 1.832-1.258 2.789-1.886 2.843-1.886.055 0 .11-.028.137 0 .055.054.055.109.027.136-.027.137-1.75 1.723-1.859 1.832-.383.383-.82.63-.137 1.067.575.383.903.629 1.504 1.011.383.247.684.547 1.067.52.191-.027.383-.191.465-.711.246-1.176.683-3.8.765-4.867' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ba20a2214444a34a1f8733b003488c44__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTelegramSmIcon);
exports.default = ForwardRef;
