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
const LabelPairedChartMixedMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15.844 5.188c.187.187.187.5-.031.687l-5.5 5a.49.49 0 0 1-.688 0L5.938 7.156.78 10.906a.467.467 0 0 1-.687-.094c-.188-.218-.125-.53.094-.718l5.5-4c.187-.125.468-.094.656.062L10 9.813l5.156-4.657a.465.465 0 0 1 .688.032M2.5 17.5v-2c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v2c0 .281.219.5.5.5.25 0 .5-.219.5-.5M2 14c.813 0 1.5.688 1.5 1.5v2A1.5 1.5 0 0 1 2 19a1.48 1.48 0 0 1-1.5-1.5v-2A1.5 1.5 0 0 1 2 14m4.5-1.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v5c0 .281.219.5.5.5.25 0 .5-.219.5-.5zm-2 0A1.5 1.5 0 0 1 6 11c.813 0 1.5.688 1.5 1.5v5A1.5 1.5 0 0 1 6 19a1.48 1.48 0 0 1-1.5-1.5zm6 5v-3c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v3c0 .281.219.5.5.5.25 0 .5-.219.5-.5M10 13c.813 0 1.5.688 1.5 1.5v3A1.5 1.5 0 0 1 10 19a1.48 1.48 0 0 1-1.5-1.5v-3A1.5 1.5 0 0 1 10 13m4.5-.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v5c0 .281.219.5.5.5.25 0 .5-.219.5-.5zm-2 0A1.5 1.5 0 0 1 14 11c.813 0 1.5.688 1.5 1.5v5A1.5 1.5 0 0 1 14 19a1.48 1.48 0 0 1-1.5-1.5z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f21a20362f1a281cfe0d6f38d4feb032__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartMixedMdRegularIcon);
exports.default = ForwardRef;
