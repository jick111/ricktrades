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
const LabelPairedOneLgBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 30, viewBox: '0 0 10 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.938 7.688v14.687h3.125a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H.938c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938h3.125V9.367l-2.657 1.64c-.43.274-1.015.118-1.289-.312C-.156 10.265 0 9.68.43 9.406l4.062-2.5a.9.9 0 0 1 .938-.039c.312.196.508.508.508.82' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '366461a3df273a593713613a3c409abd__a' },
            React.createElement("path", { d: 'M0 0h10v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedOneLgBoldIcon);
exports.default = ForwardRef;
