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
const LabelPairedBackwardSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.012 10.75 7 15.098V6.43zM7.055 5.5c.437 0 .82.383.82.82v2.844l4.813-3.5q.204-.165.492-.164c.437 0 .82.383.82.82v8.86c0 .465-.383.82-.82.82a.95.95 0 0 1-.492-.137l-4.813-3.5v2.817c0 .465-.383.82-.82.82a.95.95 0 0 1-.492-.137L.245 11.297A.69.69 0 0 1 0 10.75c0-.191.082-.383.246-.52l6.317-4.566q.204-.165.492-.164m.82 5.797 5.25 3.8V6.43l-5.25 3.8z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '53002851fbbe15b40f238c8c9c19c988__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBackwardSmRegularIcon);
exports.default = ForwardRef;
