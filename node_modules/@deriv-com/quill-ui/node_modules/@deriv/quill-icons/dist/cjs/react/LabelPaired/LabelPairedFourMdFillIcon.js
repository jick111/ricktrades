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
const LabelPairedFourMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 24, viewBox: '0 0 12 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.906 6.438 2.563 13.5H8V9c0-.531.438-1 1-1 .531 0 1 .469 1 1v4.5h1c.531 0 1 .469 1 1 0 .563-.469 1-1 1h-1V18c0 .563-.469 1-1 1-.562 0-1-.437-1-1v-2.5H1c-.344 0-.687-.156-.875-.437-.156-.313-.187-.657-.031-.97l4-8.5a.997.997 0 0 1 1.312-.5c.5.25.719.845.5 1.345' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4baefd006a093f4fd25c58030263172c__a' },
            React.createElement("path", { d: 'M0 0h12v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFourMdFillIcon);
exports.default = ForwardRef;
