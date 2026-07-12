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
const LabelPairedMapMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 24, viewBox: '0 0 18 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M17.656 5.156A.71.71 0 0 1 18 5.75v10.5c0 .313-.219.594-.5.719l-5.25 2a.7.7 0 0 1-.5 0L6 17.062 1 18.97a.68.68 0 0 1-.687-.094C.093 18.75 0 18.5 0 18.25V7.75c0-.312.188-.562.469-.687l5.25-2a.7.7 0 0 1 .5 0l5.75 1.906 5-1.907a.68.68 0 0 1 .687.094M1.5 8.281v8.907l3.75-1.438V6.844zm9.75 8.938V8.312l-4.5-1.5v8.907zm1.5-.032 3.75-1.437V6.844L12.75 8.28z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f752c665ba0dc9396f762315995689b1__a' },
            React.createElement("path", { d: 'M0 0h18v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMapMdBoldIcon);
exports.default = ForwardRef;
