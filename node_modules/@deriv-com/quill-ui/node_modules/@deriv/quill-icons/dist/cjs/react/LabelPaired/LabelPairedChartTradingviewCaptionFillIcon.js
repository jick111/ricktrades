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
const LabelPairedChartTradingviewCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.516 8.234a.723.723 0 0 1 0 1.055l-3.493 3.492a1.13 1.13 0 0 1-1.57 0l-.703-.703-.984.961a.723.723 0 0 1-1.055 0 .723.723 0 0 1 0-1.055l1.242-1.242a1.09 1.09 0 0 1 1.57 0l.727.703 3.21-3.21a.723.723 0 0 1 1.056 0M8.696 5.54c0 .281-.258.516-.54.516-.304 0-.562-.235-.562-.516s.258-.516.562-.516c.281 0 .54.235.54.516M9.116 5h.82L8.837 8h-.82zm-3.68 0h1.899v3h-.727V5.68H5.438zM3 3.5c.398 0 .75.352.75.75v9.54c0 .116.094.21.234.21h8.391c.398 0 .75.352.75.75 0 .422-.352.75-.75.75H3.422c-.68 0-1.172-.492-1.172-1.172V4.25c0-.398.328-.75.75-.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b6757642289f78f3ec297bc0818068cb__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartTradingviewCaptionFillIcon);
exports.default = ForwardRef;
