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
const LabelPairedPenXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm18.516 7.875-2.532 2.578 3.563 3.563 2.578-2.532c.422-.468.422-1.171 0-1.593l-2.016-2.016c-.422-.422-1.125-.422-1.593 0m-3.61 3.61L3.891 22.546a2.8 2.8 0 0 0-.797 1.265l-1.266 4.36 4.36-1.313c.468-.14.937-.375 1.265-.75l11.063-11.015zm6.281-4.688 2.016 2.016a2.69 2.69 0 0 1 0 3.703L8.531 27.188c-.562.515-1.219.937-1.922 1.125L.938 30c-.282.047-.563 0-.75-.187-.188-.188-.235-.47-.188-.75l1.688-5.672c.187-.703.609-1.36 1.125-1.922L17.484 6.797a2.69 2.69 0 0 1 3.703 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '43fdf7c2994acb4a032c4c8139cd27c1__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPenXlRegularIcon);
exports.default = ForwardRef;
