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
const LabelPairedScissorsMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M15.813 17.75a.78.78 0 0 1-1.063.094l-5-4.188 1.156-1 4.813 4.031a.78.78 0 0 1 .094 1.063M3.5 5.5c-.719 0-1.375.406-1.75 1-.344.625-.344 1.406 0 2 .375.625 1.031 1 1.75 1a2.02 2.02 0 0 0 1.719-1c.343-.594.343-1.375 0-2-.375-.594-1.032-1-1.719-1m0-1.5C5.406 4 7 5.594 7 7.5c0 .563-.156 1.094-.375 1.563l2.344 1.968 5.781-4.844a.78.78 0 0 1 1.063.094.78.78 0 0 1-.094 1.063l-9.094 7.625c.219.469.375 1 .375 1.531C7 18.438 5.406 20 3.5 20A3.494 3.494 0 0 1 0 16.5C0 14.594 1.563 13 3.5 13c.813 0 1.594.313 2.188.781L7.813 12l-2.125-1.75A3.56 3.56 0 0 1 3.5 11 3.494 3.494 0 0 1 0 7.5C0 5.594 1.563 4 3.5 4m2 12.5c0-.687-.406-1.344-1-1.719-.625-.344-1.406-.344-2 0a2.02 2.02 0 0 0-1 1.719c0 .719.375 1.375 1 1.75.594.344 1.375.344 2 0 .594-.375 1-1.031 1-1.75' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '9d990a33673f9290d6436c15055d7dd0__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedScissorsMdBoldIcon);
exports.default = ForwardRef;
