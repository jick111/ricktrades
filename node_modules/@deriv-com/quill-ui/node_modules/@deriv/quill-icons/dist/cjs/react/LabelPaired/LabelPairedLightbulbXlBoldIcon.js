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
const LabelPairedLightbulbXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 36, viewBox: '0 0 18 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.922 17.672A5.94 5.94 0 0 0 15 14.25c0-3.281-2.719-6-6-6-3.328 0-6 2.719-6 6 0 1.313.375 2.484 1.031 3.422.188.281.375.562.61.844.609.843 1.312 1.828 1.875 2.812.468.89.75 1.828.843 2.672H5.11c-.14-.562-.28-1.078-.562-1.594-.469-.843-1.031-1.64-1.64-2.437l-.704-.985C1.266 17.625.75 16.031.75 14.25A8.23 8.23 0 0 1 9 6c4.547 0 8.25 3.703 8.25 8.25 0 1.781-.562 3.375-1.5 4.734l-.703.985c-.61.797-1.172 1.593-1.64 2.437-.282.516-.423 1.032-.563 1.594h-2.25c.14-.844.375-1.781.844-2.672.562-.984 1.265-1.969 1.874-2.812.235-.282.422-.563.61-.844M9 12a2.25 2.25 0 0 0-2.25 2.25c0 .422-.375.75-.75.75a.74.74 0 0 1-.75-.75c0-2.062 1.64-3.75 3.75-3.75.375 0 .75.375.75.75 0 .422-.375.75-.75.75m0 18c-2.11 0-3.75-1.64-3.75-3.75v-.75h7.5v.75C12.75 28.36 11.063 30 9 30' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c55c8626173939983764c263a69980ef__a' },
            React.createElement("path", { d: 'M0 0h18v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLightbulbXlBoldIcon);
exports.default = ForwardRef;
