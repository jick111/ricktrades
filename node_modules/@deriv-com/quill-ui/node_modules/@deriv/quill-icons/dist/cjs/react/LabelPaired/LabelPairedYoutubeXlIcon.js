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
const LabelPairedYoutubeXlIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M25.734 11.86c.563 1.968.563 6.187.563 6.187s0 4.172-.563 6.187a3.13 3.13 0 0 1-2.25 2.25C21.47 27 13.5 27 13.5 27s-8.016 0-10.031-.516a3.13 3.13 0 0 1-2.25-2.25C.656 22.22.656 18.047.656 18.047s0-4.219.563-6.188c.281-1.125 1.172-2.015 2.25-2.296C5.484 9 13.5 9 13.5 9s7.969 0 9.984.563c1.078.28 1.97 1.171 2.25 2.296m-14.859 9.984 6.656-3.797-6.656-3.797z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'ad7d37c2e32561dcafe2dc54eba58d79__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedYoutubeXlIcon);
exports.default = ForwardRef;
