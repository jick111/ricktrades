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
const LabelPairedPenLineCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm10.867 3.969.914.914a1.514 1.514 0 0 1 0 2.133L10.656 8.14 7.61 5.094l1.125-1.125a1.514 1.514 0 0 1 2.133 0M1.61 11.094 7.07 5.633l3.047 3.047-5.46 5.46a2.04 2.04 0 0 1-.868.516l-2.836.82a.48.48 0 0 1-.539-.14.48.48 0 0 1-.14-.54l.82-2.835c.093-.328.281-.633.515-.867m4.454 3.281h7.125a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H6.062a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8a6852ab3ca983a1e316252d2d544f36__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPenLineCaptionFillIcon);
exports.default = ForwardRef;
