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
const LabelPairedMoonXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 36, viewBox: '0 0 18 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6.75 10.64A8.28 8.28 0 0 0 2.25 18c0 4.594 3.656 8.25 8.203 8.25.61 0 1.219-.047 1.828-.187a10.5 10.5 0 0 1-7.078-9.938c0-2.016.563-3.89 1.547-5.484m2.906-3.093h1.688c.328.047.61.281.656.61a.67.67 0 0 1-.328.796c-.188.094-.328.188-.469.281l-.562.422c-.094.047-.141.094-.188.14a8.22 8.22 0 0 0-3 6.376c0 4.547 3.703 8.203 8.203 8.25h.187c.282-.047.516-.047.75-.047.141-.047.329-.047.516-.094.328-.047.657.094.797.375.14.328.094.657-.14.89-.141.142-.235.235-.375.329-.235.188-.422.375-.657.563-.093.046-.187.14-.28.187a10.48 10.48 0 0 1-6 1.875C4.686 28.5 0 23.813 0 18 0 12.469 4.266 7.969 9.656 7.547' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fb46e12fd5c4177bc9217eed45fc5006__a' },
            React.createElement("path", { d: 'M0 0h18v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMoonXlBoldIcon);
exports.default = ForwardRef;
