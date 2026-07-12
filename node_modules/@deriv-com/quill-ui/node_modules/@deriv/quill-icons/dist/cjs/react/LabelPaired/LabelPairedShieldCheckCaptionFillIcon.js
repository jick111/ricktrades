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
const LabelPairedShieldCheckCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm6.305 3.57 4.406 1.875c.516.235.914.727.914 1.336-.023 2.344-.984 6.586-5.016 8.532a1.44 1.44 0 0 1-1.242 0C1.336 13.367.375 9.125.375 6.78c-.023-.61.375-1.101.89-1.336L5.673 3.57a.75.75 0 0 1 .633 0m1.008 4.805c0-.703-.61-1.312-1.313-1.312-.727 0-1.312.609-1.312 1.312 0 .54.304.984.75 1.195v1.617c0 .329.234.563.562.563a.555.555 0 0 0 .563-.562V9.57c.421-.21.75-.656.75-1.195' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fb7676f1924026ef5dabb103d2c224e6__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedShieldCheckCaptionFillIcon);
exports.default = ForwardRef;
