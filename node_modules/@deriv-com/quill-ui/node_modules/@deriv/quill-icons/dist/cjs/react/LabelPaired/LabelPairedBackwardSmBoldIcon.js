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
const LabelPairedBackwardSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.875 6.32v2.735l4.813-3.39c.136-.11.3-.165.464-.165.465 0 .848.383.848.848v8.832c0 .465-.383.82-.82.82-.192 0-.356-.027-.492-.137l-4.84-3.39v2.707c0 .465-.356.82-.82.82a.9.9 0 0 1-.465-.137L.245 11.297A.69.69 0 0 1 0 10.75c0-.191.082-.383.246-.52l6.317-4.566q.204-.165.492-.164c.437 0 .82.383.82.82m0 4.32v.247l4.813 3.363V7.277zm-6.125.11 4.813 3.473V7.305z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '24bf02eb4a2517333266b8d0f2f402b9__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBackwardSmBoldIcon);
exports.default = ForwardRef;
