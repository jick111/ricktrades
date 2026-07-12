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
const LabelPairedDealProtectionMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.563 7.813h3.156q.797 0 1.5.28c.468.157.843.438 1.156.782q.47.515.75 1.313c.188.53.25 1.124.25 1.812 0 .719-.062 1.313-.25 1.844q-.28.797-.75 1.312a3 3 0 0 1-1.156.781c-.438.188-.969.282-1.5.282H2.562zm3.156 6.78c.531 0 .968-.155 1.281-.468.313-.312.469-.781.469-1.469v-1.281c0-.687-.157-1.156-.469-1.469-.312-.312-.75-.469-1.281-.469H4.375v5.157zm5.187 1.595V7.813h3.969c.406 0 .75.093 1.063.218s.562.313.78.531c.22.25.407.532.532.876.094.312.156.687.156 1.062 0 .406-.031.781-.156 1.094a2.3 2.3 0 0 1-.531.844 3 3 0 0 1-.782.562 2.8 2.8 0 0 1-1.062.188H12.75v3zm1.844-4.594h1.906c.281 0 .5-.063.656-.219.157-.125.22-.344.22-.625v-.5c0-.281-.063-.5-.22-.625-.156-.156-.374-.219-.656-.219H12.75z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2a7dd224c01cccd1899c49c14e5b0954__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedDealProtectionMdBoldIcon);
exports.default = ForwardRef;
