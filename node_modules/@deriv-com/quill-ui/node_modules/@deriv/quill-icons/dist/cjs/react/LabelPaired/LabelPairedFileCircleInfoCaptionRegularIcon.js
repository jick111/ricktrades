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
const LabelPairedFileCircleInfoCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 14.75h5.438c.234.281.492.54.773.75H1.75A1.48 1.48 0 0 1 .25 14V5c0-.82.656-1.5 1.5-1.5h3.656c.282 0 .586.14.797.352l2.695 2.695c.211.21.352.516.352.797v.82c-.281.07-.516.164-.75.305V8H5.875A1.11 1.11 0 0 1 4.75 6.875V4.25h-3A.755.755 0 0 0 1 5v9c0 .422.328.75.75.75m6.727-7.5c-.024-.047-.047-.117-.094-.164L5.664 4.367c-.047-.047-.117-.07-.164-.094v2.602c0 .21.164.375.375.375zM13 12.125c0-.937-.516-1.781-1.312-2.25a2.52 2.52 0 0 0-2.626 0 2.57 2.57 0 0 0-1.312 2.25c0 .96.492 1.805 1.313 2.273a2.52 2.52 0 0 0 2.624 0A2.63 2.63 0 0 0 13 12.125m-6 0c0-1.195.633-2.297 1.688-2.906a3.34 3.34 0 0 1 3.374 0c1.032.61 1.688 1.71 1.688 2.906 0 1.219-.656 2.32-1.687 2.93a3.34 3.34 0 0 1-3.376 0A3.36 3.36 0 0 1 7 12.125m3.375-.75a.54.54 0 0 1-.562-.562c0-.305.234-.563.562-.563a.57.57 0 0 1 .563.563.555.555 0 0 1-.563.562m-.75 2.25c0-.187.164-.375.375-.375v-.75a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h.375c.188 0 .375.188.375.375v1.125c.188 0 .375.188.375.375 0 .21-.187.375-.375.375H10a.37.37 0 0 1-.375-.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd924b251b0db599b2a73b076d9b1a051__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileCircleInfoCaptionRegularIcon);
exports.default = ForwardRef;
