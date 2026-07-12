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
const LabelPairedTwoMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 10, height: 24, viewBox: '0 0 10 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.438 7c-.657 0-1.313.281-1.782.75l-.969.969a.964.964 0 0 1-1.406 0 .964.964 0 0 1 0-1.406l.969-.97C2.094 5.5 3.25 5 4.438 5A4.55 4.55 0 0 1 9 9.563c0 1.187-.5 2.343-1.344 3.187L3.406 17H9c.531 0 1 .469 1 1 0 .563-.469 1-1 1H1c-.406 0-.781-.219-.937-.594a1.01 1.01 0 0 1 .218-1.093l5.969-5.97c.469-.468.75-1.124.75-1.78A2.574 2.574 0 0 0 4.438 7' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd5f9916397f76fc246e0beb8e3ad7917__a' },
            React.createElement("path", { d: 'M0 0h10v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTwoMdFillIcon);
exports.default = ForwardRef;
