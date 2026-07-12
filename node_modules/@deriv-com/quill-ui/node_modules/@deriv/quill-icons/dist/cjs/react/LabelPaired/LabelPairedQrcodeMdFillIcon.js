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
const LabelPairedQrcodeMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 6.5A1.5 1.5 0 0 1 1.5 5h3C5.313 5 6 5.688 6 6.5v3A1.5 1.5 0 0 1 4.5 11h-3A1.48 1.48 0 0 1 0 9.5zM2 7v2h2V7zm-2 7.5A1.5 1.5 0 0 1 1.5 13h3c.813 0 1.5.688 1.5 1.5v3A1.5 1.5 0 0 1 4.5 19h-3A1.48 1.48 0 0 1 0 17.5zm2 .5v2h2v-2zM9.5 5h3c.813 0 1.5.688 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.48 1.48 0 0 1 8 9.5v-3A1.5 1.5 0 0 1 9.5 5M12 7h-2v2h2zm-4 6.5c0-.25.219-.5.5-.5h2c.25 0 .5.25.5.5 0 .281.219.5.5.5h1c.25 0 .5-.219.5-.5 0-.25.219-.5.5-.5.25 0 .5.25.5.5v3c0 .281-.25.5-.5.5h-2a.494.494 0 0 1-.5-.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5v2c0 .281-.25.5-.5.5h-1a.494.494 0 0 1-.5-.5zm3.5 5.5a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5 0 .281-.25.5-.5.5m2 0a.494.494 0 0 1-.5-.5c0-.25.219-.5.5-.5.25 0 .5.25.5.5 0 .281-.25.5-.5.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c1a8505bc67ce2a358b918eba3219386__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedQrcodeMdFillIcon);
exports.default = ForwardRef;
