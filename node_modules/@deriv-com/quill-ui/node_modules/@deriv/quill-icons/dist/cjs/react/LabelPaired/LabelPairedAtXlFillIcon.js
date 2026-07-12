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
const LabelPairedAtXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12 9c-4.969 0-9 4.031-9 9s4.031 9 9 9c.797 0 1.5.703 1.5 1.5 0 .844-.703 1.5-1.5 1.5-6.656 0-12-5.344-12-12C0 11.39 5.344 6 12 6c6.61 0 12 5.39 12 12v1.5c0 2.484-2.016 4.5-4.5 4.5a4.63 4.63 0 0 1-3.469-1.547C15 23.438 13.547 24 12 24c-3.328 0-6-2.672-6-6 0-3.281 2.672-6 6-6 1.266 0 2.484.422 3.469 1.172.281-.235.61-.422 1.031-.422.797 0 1.5.703 1.5 1.5v5.25c0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5V18c0-4.969-4.031-9-9-9m3 9c0-1.031-.61-2.016-1.5-2.578-.937-.516-2.11-.516-3 0C9.563 15.984 9 16.969 9 18c0 1.078.563 2.063 1.5 2.625.89.516 2.063.516 3 0 .89-.562 1.5-1.547 1.5-2.625' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '02bbed58002e307c39826e06d63e9ede__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedAtXlFillIcon);
exports.default = ForwardRef;
