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
const LabelPairedExclamationLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 3, height: 30, viewBox: '0 0 3 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.438 7.688v11.25c0 .546-.43.937-.938.937-.547 0-.937-.39-.937-.937V7.688c0-.508.39-.938.937-.938a.95.95 0 0 1 .938.938M1.5 24.25C.797 24.25.25 23.703.25 23c0-.664.547-1.25 1.25-1.25.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ef3007ad6df7e4df798e3c1b412b568a__a' },
            React.createElement("path", { d: 'M0 0h3v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedExclamationLgBoldIcon);
exports.default = ForwardRef;
