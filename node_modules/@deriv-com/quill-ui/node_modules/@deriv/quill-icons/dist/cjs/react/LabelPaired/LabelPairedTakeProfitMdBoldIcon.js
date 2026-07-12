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
const LabelPairedTakeProfitMdBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.031 9.438v6.75H5.188v-6.75h-2.25V7.812H9.28v1.625zm3.5 6.75V7.813H14.5c.375 0 .75.093 1.063.218s.562.313.78.531c.22.25.407.532.532.876a3.8 3.8 0 0 1 0 2.156 2.3 2.3 0 0 1-.531.844 3 3 0 0 1-.782.562 2.8 2.8 0 0 1-1.062.188h-2.125v3zm1.844-4.594h1.906c.281 0 .5-.063.625-.219.188-.125.25-.344.25-.625v-.5c0-.281-.062-.5-.25-.625-.125-.156-.344-.219-.625-.219h-1.906z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'b7139e1ba2389a1213e319af81dfdae2__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedTakeProfitMdBoldIcon);
exports.default = ForwardRef;
