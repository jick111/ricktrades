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
const LabelPairedChevronsUpLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm10.86 7.14 7.5 7.5c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0L10 9.797l-6.64 6.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l7.5-7.5a1.205 1.205 0 0 1 1.757 0m7.5 15c.507.47.507 1.29 0 1.758a1.205 1.205 0 0 1-1.758 0L10 17.297l-6.64 6.601a1.205 1.205 0 0 1-1.758 0 1.205 1.205 0 0 1 0-1.757l7.5-7.5a1.205 1.205 0 0 1 1.757 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd4c06c5488b7297dbba958bd52d1c4ee__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChevronsUpLgFillIcon);
exports.default = ForwardRef;
