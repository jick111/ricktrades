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
const LabelPairedTriangleExclamationXlFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12 7.5c.656 0 1.266.375 1.594.938l10.125 17.25c.328.609.328 1.312 0 1.875-.328.609-.938.937-1.594.937H1.875c-.703 0-1.312-.328-1.64-.937-.329-.563-.329-1.266 0-1.875l10.124-17.25A1.89 1.89 0 0 1 12 7.5m0 6a1.11 1.11 0 0 0-1.125 1.125v5.25c0 .656.469 1.125 1.125 1.125a1.11 1.11 0 0 0 1.125-1.125v-5.25A1.14 1.14 0 0 0 12 13.5M13.5 24c0-.797-.703-1.5-1.5-1.5-.844 0-1.5.703-1.5 1.5 0 .844.656 1.5 1.5 1.5.797 0 1.5-.656 1.5-1.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '74546597581bd33dd5eaf112337efb76__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTriangleExclamationXlFillIcon);
exports.default = ForwardRef;
