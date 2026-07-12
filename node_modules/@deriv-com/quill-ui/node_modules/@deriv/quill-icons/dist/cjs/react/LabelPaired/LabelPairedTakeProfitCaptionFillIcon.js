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
const LabelPairedTakeProfitCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.602 13.04V7.976h1.687v-1.97H1.781v1.97H3.47v5.062zm1.875-7.032h3.351c.328 0 .656.07.938.187.28.117.515.282.726.492s.352.47.469.774c.094.281.14.61.14.937 0 .329-.046.657-.14.938-.117.305-.258.539-.469.773-.21.211-.445.375-.726.493-.282.117-.61.164-.938.164H9.61v2.273H7.477zM10.875 8c-.023-.023-.07-.047-.21-.047H9.608v.89h1.055c.14 0 .211-.046.234-.07.024-.023.047-.046.047-.187v-.399c0-.117-.023-.164-.047-.164z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e986ddab1a9290786996e639138713f3__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTakeProfitCaptionFillIcon);
exports.default = ForwardRef;
