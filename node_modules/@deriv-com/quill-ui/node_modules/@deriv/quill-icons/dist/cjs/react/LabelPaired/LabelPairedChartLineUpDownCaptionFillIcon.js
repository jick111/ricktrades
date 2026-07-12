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
const LabelPairedChartLineUpDownCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 5v7.875c0 .21.164.375.375.375h9.375c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H1.875A1.85 1.85 0 0 1 0 12.875V5c0-.398.328-.75.75-.75.398 0 .75.352.75.75m7.336 1.36-.445-.446a.53.53 0 0 1-.141-.375c0-.281.234-.539.516-.539h2.109c.188 0 .375.188.375.375v2.109c0 .282-.258.516-.54.516a.53.53 0 0 1-.374-.14l-.445-.446-2.625 2.625a.723.723 0 0 1-1.055 0L4.875 8.703l-1.36 1.336a.723.723 0 0 1-1.054 0 .723.723 0 0 1 0-1.055L4.336 7.11a.723.723 0 0 1 1.055 0L6.75 8.445zm1.5 3.304a.55.55 0 0 1 .375-.164c.305 0 .539.258.539.54v2.085c0 .21-.187.375-.375.375h-2.11a.52.52 0 0 1-.515-.516c0-.14.047-.28.14-.375l.446-.445-.82-.82 1.078-1.055.797.82z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fb6a8cf73ee7730d6edf896d33c75970__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineUpDownCaptionFillIcon);
exports.default = ForwardRef;
