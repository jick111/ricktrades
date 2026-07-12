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
const LabelPairedPlayMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 24, viewBox: '0 0 12 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 6.094a.57.57 0 0 0-.5-.032c-.156.094-.281.282-.281.438v11a.49.49 0 0 0 .281.438.48.48 0 0 0 .5 0l9-5.5A.5.5 0 0 0 11 12a.49.49 0 0 0-.25-.406zm-1-.875a1.5 1.5 0 0 1 1.531 0l9 5.5C11.72 11 12 11.5 12 12c0 .531-.281 1.031-.719 1.281l-9 5.5a1.43 1.43 0 0 1-1.531.032c-.469-.25-.75-.75-.75-1.313v-11c0-.531.281-1.031.75-1.281' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6c97069ffe789344ea8c2c8266d55ce8__a' },
            React.createElement("path", { d: 'M0 0h12v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPlayMdRegularIcon);
exports.default = ForwardRef;
