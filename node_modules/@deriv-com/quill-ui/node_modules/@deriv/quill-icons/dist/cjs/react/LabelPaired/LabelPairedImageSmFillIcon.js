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
const LabelPairedImageSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 6.375c0-.957.766-1.75 1.75-1.75h10.5c.957 0 1.75.793 1.75 1.75v8.75c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75zm8.832 2.926A.62.62 0 0 0 8.312 9a.63.63 0 0 0-.546.3l-2.38 3.5-.738-.929a.67.67 0 0 0-.492-.246c-.218 0-.41.11-.52.246l-1.75 2.188a.68.68 0 0 0-.081.71.65.65 0 0 0 .601.356h9.188c.219 0 .465-.11.574-.328a.68.68 0 0 0-.055-.684zM3.062 9c.465 0 .876-.246 1.122-.656.246-.383.246-.903 0-1.313-.247-.383-.657-.656-1.122-.656-.492 0-.902.273-1.148.656-.246.41-.246.93 0 1.313.246.41.656.656 1.149.656' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0056008b9eb3e8d1948568eb2afe4853__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedImageSmFillIcon);
exports.default = ForwardRef;
