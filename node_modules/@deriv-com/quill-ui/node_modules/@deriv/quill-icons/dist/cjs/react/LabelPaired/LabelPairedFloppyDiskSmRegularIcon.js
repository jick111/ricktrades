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
const LabelPairedFloppyDiskSmRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 22, viewBox: '0 0 13 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.25 6.375v8.75c0 .492.383.875.875.875h8.75a.88.88 0 0 0 .875-.875v-6.7a.9.9 0 0 0-.273-.628L9.453 5.773c-.11-.109-.219-.164-.328-.218v2.57c0 .492-.41.875-.875.875H3a.864.864 0 0 1-.875-.875V5.5a.88.88 0 0 0-.875.875M3 5.5v2.625h5.25V5.5zm-2.625.875c0-.957.766-1.75 1.75-1.75h6.7c.464 0 .902.191 1.23.52l2.05 2.05c.329.328.52.766.52 1.23v6.7c0 .984-.793 1.75-1.75 1.75h-8.75c-.984 0-1.75-.766-1.75-1.75zM7.813 12.5c0-.465-.274-.875-.657-1.121-.41-.246-.93-.246-1.312 0-.41.246-.657.656-.657 1.121 0 .492.247.902.657 1.148.383.247.902.247 1.312 0 .383-.246.657-.656.657-1.148M6.5 10.313c.766 0 1.477.437 1.887 1.093.383.684.383 1.531 0 2.188-.41.683-1.121 1.094-1.887 1.094-.793 0-1.504-.41-1.914-1.094-.383-.656-.383-1.504 0-2.188.41-.656 1.121-1.094 1.914-1.094' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '707a1f3eee5bd9935423fc7da49797cd__a' },
            React.createElement("path", { d: 'M0 0h13v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFloppyDiskSmRegularIcon);
exports.default = ForwardRef;
