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
const LabelPairedTiktokCaptionIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 11, height: 18, viewBox: '0 0 11 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.75 8.422a4.7 4.7 0 0 1-2.883-.914v4.195c0 1.594-.984 3-2.484 3.563a3.78 3.78 0 0 1-4.195-1.055 3.84 3.84 0 0 1-.493-4.336c.75-1.383 2.297-2.156 3.89-1.945v2.11a1.77 1.77 0 0 0-1.968.632 1.8 1.8 0 0 0 .024 2.062c.445.61 1.242.868 1.945.633a1.76 1.76 0 0 0 1.219-1.664V3.5h2.062c0 .188 0 .352.047.54.14.773.586 1.452 1.266 1.874a2.8 2.8 0 0 0 1.57.469z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '04d9a1f4550204ad39a866aaaefe7733__a' },
            React.createElement("path", { d: 'M0 0h11v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTiktokCaptionIcon);
exports.default = ForwardRef;
