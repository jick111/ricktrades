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
const LabelPairedThreeXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 8.25c0-.375.328-.75.75-.75H13.5a.69.69 0 0 1 .656.516.65.65 0 0 1-.187.797L5.625 16.5H9c3.281 0 6 2.719 6 6 0 3.328-2.719 6-6 6H4.172C2.484 28.5.89 27.563.14 26.016l-.094-.141a.77.77 0 0 1 .328-1.031.77.77 0 0 1 1.031.328l.094.187A2.96 2.96 0 0 0 4.172 27H9a4.501 4.501 0 0 0 0-9H3.75c-.328 0-.61-.187-.703-.469a.65.65 0 0 1 .187-.797L11.578 9H.75A.74.74 0 0 1 0 8.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f67762f61579d8d5516e4ea2ba2dcc4c__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedThreeXlRegularIcon);
exports.default = ForwardRef;
