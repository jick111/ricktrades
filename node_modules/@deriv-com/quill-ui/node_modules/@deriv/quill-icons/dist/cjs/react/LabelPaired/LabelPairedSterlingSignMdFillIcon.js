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
const LabelPairedSterlingSignMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M3.5 9.031V11H7c.531 0 1 .469 1 1 0 .563-.469 1-1 1H3.5v1.406c0 .906-.25 1.781-.719 2.563L2.75 17H9c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.375 0-.719-.187-.875-.5a.96.96 0 0 1 0-1l.938-1.562c.28-.47.437-1 .437-1.532V13H1c-.562 0-1-.437-1-1 0-.531.438-1 1-1h.5V9.031C1.5 6.812 3.281 5 5.5 5c.438 0 .844.094 1.281.219l2.532.843a1 1 0 0 1 .624 1.282c-.187.5-.75.781-1.25.625l-2.562-.844A2 2 0 0 0 5.5 7c-1.125 0-2 .906-2 2.031' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3539c1f1c2f612cff43a0bc4b8303a52__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSterlingSignMdFillIcon);
exports.default = ForwardRef;
