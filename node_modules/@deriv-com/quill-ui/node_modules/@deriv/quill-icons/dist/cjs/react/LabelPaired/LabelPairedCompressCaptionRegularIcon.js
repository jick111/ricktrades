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
const LabelPairedCompressCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4 4.625v3c0 .21-.187.375-.375.375h-3a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375H3.25V4.625c0-.187.164-.375.375-.375.188 0 .375.188.375.375M.625 11h3c.188 0 .375.188.375.375v3c0 .21-.187.375-.375.375a.37.37 0 0 1-.375-.375V11.75H.625a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375M7.75 4.625V7.25h2.625c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3A.37.37 0 0 1 7 7.625v-3c0-.187.164-.375.375-.375.188 0 .375.188.375.375M7.375 11h3c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H7.75v2.625c0 .21-.187.375-.375.375A.37.37 0 0 1 7 14.375v-3c0-.187.164-.375.375-.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a17cea03d0644c7c59ac43e1d4ea85bf__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCompressCaptionRegularIcon);
exports.default = ForwardRef;
