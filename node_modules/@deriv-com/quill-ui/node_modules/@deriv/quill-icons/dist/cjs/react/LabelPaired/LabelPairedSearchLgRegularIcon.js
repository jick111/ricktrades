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
const LabelPairedSearchLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15 13.625c0-2.422-1.328-4.687-3.437-5.937-2.149-1.211-4.766-1.211-6.876 0a6.87 6.87 0 0 0-3.437 5.937c0 2.46 1.29 4.727 3.438 5.977 2.109 1.21 4.726 1.21 6.875 0C13.672 18.352 15 16.086 15 13.625m-1.602 6.172c-1.406 1.25-3.28 1.953-5.273 1.953A8.12 8.12 0 0 1 0 13.625C0 9.172 3.633 5.5 8.125 5.5c4.453 0 8.125 3.672 8.125 8.125 0 2.031-.742 3.867-1.953 5.313l5.508 5.507a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '14f14b40fca0a235859e8a6a843faa96__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSearchLgRegularIcon);
exports.default = ForwardRef;
