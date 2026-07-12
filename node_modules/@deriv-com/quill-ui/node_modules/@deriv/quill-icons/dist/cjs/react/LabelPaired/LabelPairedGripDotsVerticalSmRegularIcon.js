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
const LabelPairedGripDotsVerticalSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 7, height: 22, viewBox: '0 0 7 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 6.375a.47.47 0 0 0-.437-.437.45.45 0 0 0-.438.437c0 .246.191.438.438.438a.45.45 0 0 0 .437-.438m-1.75 0C0 5.91.246 5.5.656 5.254c.383-.246.903-.246 1.313 0 .383.246.656.656.656 1.121 0 .492-.273.902-.656 1.148-.41.247-.93.247-1.313 0A1.31 1.31 0 0 1 0 6.375m1.75 4.375a.47.47 0 0 0-.437-.437.45.45 0 0 0-.438.437c0 .246.191.438.438.438a.45.45 0 0 0 .437-.438m-1.75 0c0-.465.246-.875.656-1.121.383-.246.903-.246 1.313 0 .383.246.656.656.656 1.121 0 .492-.273.902-.656 1.148-.41.247-.93.247-1.313 0A1.31 1.31 0 0 1 0 10.75m1.313 4.813a.45.45 0 0 0 .437-.438.47.47 0 0 0-.437-.437.45.45 0 0 0-.438.437c0 .246.191.438.438.438m0-1.75c.464 0 .875.273 1.12.656.247.41.247.93 0 1.312-.245.41-.656.656-1.12.656a1.31 1.31 0 0 1-1.149-.656c-.246-.383-.246-.902 0-1.312.246-.383.656-.656 1.149-.656m4.812-7.438a.47.47 0 0 0-.437-.437.45.45 0 0 0-.438.437c0 .246.191.438.438.438a.45.45 0 0 0 .437-.438m-1.75 0c0-.465.246-.875.656-1.121.383-.246.903-.246 1.313 0C6.727 5.5 7 5.91 7 6.375c0 .492-.273.902-.656 1.148-.41.247-.93.247-1.313 0a1.31 1.31 0 0 1-.656-1.148m1.313 4.813a.45.45 0 0 0 .437-.438.47.47 0 0 0-.437-.437.45.45 0 0 0-.438.437c0 .246.191.438.438.438m0-1.75c.464 0 .875.273 1.12.656.247.41.247.93 0 1.312-.245.41-.656.656-1.12.656a1.31 1.31 0 0 1-1.149-.656c-.246-.383-.246-.902 0-1.312.246-.383.656-.656 1.149-.656m.437 5.687a.47.47 0 0 0-.437-.437.45.45 0 0 0-.438.437c0 .246.191.438.438.438a.45.45 0 0 0 .437-.438m-1.75 0c0-.465.246-.875.656-1.121.383-.246.903-.246 1.313 0 .383.246.656.656.656 1.121 0 .492-.273.902-.656 1.148-.41.247-.93.247-1.313 0a1.31 1.31 0 0 1-.656-1.148' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c82173e7dde538b643e6283f6f4b60e7__a' },
            React.createElement("path", { d: 'M0 0h7v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGripDotsVerticalSmRegularIcon);
exports.default = ForwardRef;
