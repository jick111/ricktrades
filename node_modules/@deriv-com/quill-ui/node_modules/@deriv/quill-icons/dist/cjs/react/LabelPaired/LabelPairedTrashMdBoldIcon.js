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
const LabelPairedTrashMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 24, viewBox: '0 0 14 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.531 5.5c-.093 0-.156.063-.218.125l-.594.875H9.25l-.594-.875a.26.26 0 0 0-.219-.125zm5.532 1h2.187a.76.76 0 0 1 .75.75.74.74 0 0 1-.75.75h-.375l-.75 10.156c-.094 1.063-.937 1.844-2 1.844H3.844c-1.063 0-1.906-.781-2-1.844L1.094 8H.75A.72.72 0 0 1 0 7.25a.74.74 0 0 1 .75-.75h2.156l1.156-1.719A1.79 1.79 0 0 1 5.533 4h2.906c.593 0 1.156.313 1.468.781zm.312 1.5H2.594l.75 10.063c.031.25.25.437.5.437h6.281c.25 0 .469-.187.5-.437z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '171eae284ff9ffe33c89380c5235762c__a' },
            React.createElement("path", { d: 'M0 0h14v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTrashMdBoldIcon);
exports.default = ForwardRef;
