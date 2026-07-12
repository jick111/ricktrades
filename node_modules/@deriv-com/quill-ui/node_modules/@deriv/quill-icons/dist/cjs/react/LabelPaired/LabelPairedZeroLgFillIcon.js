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
const LabelPairedZeroLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 13, height: 30, viewBox: '0 0 13 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M.25 13A6.243 6.243 0 0 1 6.5 6.75c3.438 0 6.25 2.813 6.25 6.25v5a6.243 6.243 0 0 1-6.25 6.25A6.22 6.22 0 0 1 .25 18zM6.5 9.25c-2.07 0-3.75 1.68-3.75 3.75v5a3.751 3.751 0 0 0 7.5 0v-5c0-2.07-1.68-3.75-3.75-3.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '4b2daabba309026a1ecf7df4a05ca546__a' },
            React.createElement("path", { d: 'M0 0h13v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedZeroLgFillIcon);
exports.default = ForwardRef;
