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
const LabelPairedClapperboardPlayXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M22.5 15h-21v10.5c0 .844.656 1.5 1.5 1.5h18c.797 0 1.5-.656 1.5-1.5zm0-1.5v-3c0-.422-.187-.797-.516-1.078L17.906 13.5zm-11.719 0h5.016l4.5-4.5H15.28zm-2.11 0 4.5-4.5H8.157l-4.5 4.5zM3 9c-.844 0-1.5.703-1.5 1.5v3h.047l4.5-4.5zm21 4.5v12c0 1.688-1.36 3-3 3H3c-1.687 0-3-1.312-3-3v-15c0-1.64 1.313-3 3-3h18c1.64 0 3 1.36 3 3zm-13.875 3.14 6.375 3.75c.234.141.375.376.375.61 0 .281-.14.516-.375.656l-6.375 3.75a.72.72 0 0 1-.75 0c-.234-.14-.422-.375-.422-.656v-7.5c0-.234.188-.516.422-.61a.72.72 0 0 1 .75 0m4.5 4.36L10.5 18.563v4.875z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '00526bf458c5d33355565adbf8d644b0__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedClapperboardPlayXlRegularIcon);
exports.default = ForwardRef;
