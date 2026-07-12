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
const LabelPairedCircleEuroCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.875 9.5c0-1.734-.937-3.328-2.437-4.219a4.89 4.89 0 0 0-4.876 0A4.87 4.87 0 0 0 1.126 9.5a4.88 4.88 0 0 0 2.438 4.242c1.5.867 3.351.867 4.874 0 1.5-.89 2.438-2.484 2.438-4.242M0 9.5a5.96 5.96 0 0 1 3-5.18 5.97 5.97 0 0 1 6 0 6 6 0 0 1 3 5.18 6.01 6.01 0 0 1-3 5.203 5.97 5.97 0 0 1-6 0A5.97 5.97 0 0 1 0 9.5m3 .375h.375c-.023-.117-.023-.234-.023-.352s0-.257.023-.398H3a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.563C4.008 7.297 5.109 6.5 6.352 6.5h.984a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562h-.984c-.61 0-1.149.305-1.5.75H6.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H4.5c-.023.14-.023.258-.023.398 0 .118 0 .258.023.352h2.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H4.828c.352.492.89.797 1.524.797h.984a.57.57 0 0 1 .562.562.57.57 0 0 1-.562.563h-.984a2.985 2.985 0 0 1-2.79-1.922H3a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6731fd0b535060f0decfdfd0f756cb00__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleEuroCaptionBoldIcon);
exports.default = ForwardRef;
