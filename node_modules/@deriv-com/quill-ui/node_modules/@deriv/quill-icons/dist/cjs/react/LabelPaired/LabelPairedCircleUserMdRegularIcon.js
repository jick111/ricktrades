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
const LabelPairedCircleUserMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.875 17.031A7 7 0 0 0 15 12c0-3.844-3.156-7-7-7-3.875 0-7 3.156-7 7a7.1 7.1 0 0 0 2.094 5.031C3.53 15.313 5.125 14 7 14h2c1.844 0 3.438 1.313 3.875 3.031m-.906.719v.031C11.844 16.22 10.563 15 9 15H7a3.004 3.004 0 0 0-3 2.781C5.125 18.563 6.5 19 8 19c1.469 0 2.844-.437 3.969-1.25M8 20c-2.875 0-5.5-1.5-6.937-4-1.438-2.469-1.438-5.5 0-8A8.02 8.02 0 0 1 8 4c2.844 0 5.469 1.531 6.906 4 1.438 2.5 1.438 5.531 0 8A7.94 7.94 0 0 1 8 20m0-8c.531 0 1-.281 1.281-.75.281-.437.281-1.031 0-1.5C9 9.313 8.531 9 8 9c-.562 0-1.031.313-1.312.75-.282.469-.282 1.063 0 1.5.28.469.75.75 1.312.75m-2.5-1.5c0-.875.469-1.687 1.25-2.156.75-.438 1.719-.438 2.5 0 .75.469 1.25 1.281 1.25 2.156 0 .906-.5 1.719-1.25 2.188-.781.437-1.75.437-2.5 0A2.53 2.53 0 0 1 5.5 10.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2edba94914492ed93d304f2854339938__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleUserMdRegularIcon);
exports.default = ForwardRef;
