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
const LabelPairedCaretDownXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm7.734 22.406 5.625-5.297c.094-.093.094-.14.094-.234 0-.187-.14-.375-.328-.375H1.828c-.187 0-.328.188-.328.375 0 .094 0 .14.094.234l5.625 5.297c.047.094.14.094.281.094.094 0 .188 0 .234-.094m1.032 1.125C8.438 23.86 7.969 24 7.5 24c-.516 0-.984-.14-1.312-.469L.563 18.188C.188 17.859 0 17.344 0 16.875 0 15.844.797 15 1.828 15l11.297.047c1.031 0 1.875.797 1.875 1.828 0 .469-.234.984-.61 1.313z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3857a9bd125f363ce0c50cfb5beda8c5__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCaretDownXlRegularIcon);
exports.default = ForwardRef;
