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
const LabelPairedForwardMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14.813 12 8 7.063v9.906zM7.937 6c.188 0 .375.063.532.188l7.219 5.218c.187.156.312.375.312.594 0 .25-.125.469-.312.625l-7.22 5.219a1.05 1.05 0 0 1-.53.156.92.92 0 0 1-.938-.937v-3.22l-5.531 4A1.05 1.05 0 0 1 .937 18 .92.92 0 0 1 0 17.063V6.938C0 6.438.406 6 .938 6c.187 0 .375.063.53.188l5.532 4v-3.25c0-.5.406-.938.938-.938M7 12.625v-1.219L1 7.062v9.907z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '18481178696bf10cb6b2ab77eb30c849__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedForwardMdRegularIcon);
exports.default = ForwardRef;
