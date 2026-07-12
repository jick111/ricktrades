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
const LabelPairedOneCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 6, height: 18, viewBox: '0 0 6 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.375 4.625V14h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H.375A.37.37 0 0 1 0 14.375C0 14.188.164 14 .375 14h2.25V5.328L.938 6.453a.36.36 0 0 1-.516-.117.36.36 0 0 1 .117-.516l2.25-1.5a.42.42 0 0 1 .375-.023c.117.07.211.21.211.328' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '397bdd7a798c46612fe174173b6a7fae__a' },
            React.createElement("path", { d: 'M0 0h6v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedOneCaptionRegularIcon);
exports.default = ForwardRef;
