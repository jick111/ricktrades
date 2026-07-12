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
const LabelPairedGrid2XlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.5 9.75v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25v-4.5A2.25 2.25 0 0 1 3.75 7.5h4.5c1.219 0 2.25 1.031 2.25 2.25m0 12v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25v-4.5a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25m3-12a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25zm9 12v4.5a2.25 2.25 0 0 1-2.25 2.25h-4.5a2.22 2.22 0 0 1-2.25-2.25v-4.5a2.25 2.25 0 0 1 2.25-2.25h4.5c1.219 0 2.25 1.031 2.25 2.25' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '791c6ef2343eeec3377b4ad25445bd3a__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGrid2XlFillIcon);
exports.default = ForwardRef;
