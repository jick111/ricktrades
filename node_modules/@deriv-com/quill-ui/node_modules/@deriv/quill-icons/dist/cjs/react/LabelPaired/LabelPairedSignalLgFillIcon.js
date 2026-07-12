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
const LabelPairedSignalLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 25, height: 30, viewBox: '0 0 25 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M22.5 5.5c.664 0 1.25.586 1.25 1.25v17.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V6.75c0-.664.547-1.25 1.25-1.25m-5 3.75c.664 0 1.25.586 1.25 1.25v13.75c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V10.5c0-.664.547-1.25 1.25-1.25m-3.75 5v10c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-10c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25m-6.25 2.5c.664 0 1.25.586 1.25 1.25v6.25c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25V18c0-.664.547-1.25 1.25-1.25m-3.75 5v2.5c0 .703-.586 1.25-1.25 1.25-.703 0-1.25-.547-1.25-1.25v-2.5c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '572e13eaaea89bd9fc9a79b7dc765d0a__a' },
            React.createElement("path", { d: 'M0 0h25v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSignalLgFillIcon);
exports.default = ForwardRef;
