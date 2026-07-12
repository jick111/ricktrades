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
const LabelPairedPlayCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 9, height: 18, viewBox: '0 0 9 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.313 5.07a.42.42 0 0 0-.375-.023c-.118.07-.211.21-.211.328v8.25c0 .14.093.281.21.328a.36.36 0 0 0 .375 0l6.75-4.125A.37.37 0 0 0 8.25 9.5a.37.37 0 0 0-.187-.305zm-.75-.656c.351-.21.796-.21 1.148 0L8.46 8.54c.328.211.539.586.539.961 0 .398-.21.773-.54.96l-6.75 4.126a1.07 1.07 0 0 1-1.147.023C.21 14.422 0 14.047 0 13.625v-8.25c0-.398.21-.773.563-.96' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd5e6872b59e05b1fb726e65bb1767cb9__a' },
            React.createElement("path", { d: 'M0 0h9v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPlayCaptionRegularIcon);
exports.default = ForwardRef;
