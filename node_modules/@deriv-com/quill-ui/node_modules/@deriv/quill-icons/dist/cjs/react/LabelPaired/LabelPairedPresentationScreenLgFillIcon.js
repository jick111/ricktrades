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
const LabelPairedPresentationScreenLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 30, viewBox: '0 0 23 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 5.5h20c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25v8.75c0 1.406-1.133 2.5-2.5 2.5h-6.25v1.367l2.734 2.774c.508.468.508 1.289 0 1.757a1.205 1.205 0 0 1-1.757 0L11.5 22.922l-2.266 2.226a1.205 1.205 0 0 1-1.757 0 1.205 1.205 0 0 1 0-1.757l2.773-2.774V19.25H4a2.47 2.47 0 0 1-2.5-2.5V8C.797 8 .25 7.453.25 6.75c0-.664.547-1.25 1.25-1.25M4 8v8.75h15V8z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '929476e4613a343e9f40b015e2123c93__a' },
            React.createElement("path", { d: 'M0 0h23v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPresentationScreenLgFillIcon);
exports.default = ForwardRef;
