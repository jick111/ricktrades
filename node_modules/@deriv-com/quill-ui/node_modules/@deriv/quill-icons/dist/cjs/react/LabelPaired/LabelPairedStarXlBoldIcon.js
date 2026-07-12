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
const LabelPairedStarXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.453 6c.469 0 .844.281 1.031.656l3.235 6.61 7.172 1.078c.422.047.75.328.89.75s.047.844-.281 1.172l-5.203 5.156 1.219 7.265a1.13 1.13 0 0 1-.422 1.125c-.375.235-.844.282-1.219.094l-6.422-3.468-6.375 3.468c-.422.188-.844.14-1.219-.093-.328-.282-.515-.704-.421-1.125l1.218-7.266-5.203-5.156a1.1 1.1 0 0 1-.281-1.172c.14-.375.469-.703.89-.75l7.172-1.078 3.235-6.61c.187-.375.562-.656.984-.656m0 3.703-2.437 5.11c-.188.328-.47.562-.844.609l-5.531.797 3.984 3.984c.281.281.422.656.328.985l-.937 5.625 4.922-2.625c.328-.188.75-.188 1.078 0l4.922 2.625L18 21.234a.97.97 0 0 1 .328-.984l3.985-4.031-5.532-.797c-.375-.047-.656-.281-.843-.61z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '7a84514b29214f27310fa0c4ad91a827__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedStarXlBoldIcon);
exports.default = ForwardRef;
