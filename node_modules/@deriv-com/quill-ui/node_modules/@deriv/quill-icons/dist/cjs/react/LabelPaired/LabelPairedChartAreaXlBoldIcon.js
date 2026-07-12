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
const LabelPairedChartAreaXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2.25 8.625v16.5c0 .656.469 1.125 1.125 1.125h19.5c.61 0 1.125.516 1.125 1.125a1.11 1.11 0 0 1-1.125 1.125h-19.5A3.36 3.36 0 0 1 0 25.125v-16.5C0 8.015.469 7.5 1.125 7.5c.61 0 1.125.516 1.125 1.125m11.156 7.969L10.5 13.687l-3.75 3.75v4.313h13.5v-3.656l-2.39-2.766-1.313 1.266a2.206 2.206 0 0 1-3.14 0M15 15l1.547-1.547.281-.281c.61-.61 1.64-.563 2.203.094l2.907 3.375c.328.422.562.937.562 1.453V22.5c0 .844-.703 1.5-1.5 1.5H6a1.48 1.48 0 0 1-1.5-1.5v-5.062c0-.563.234-1.172.656-1.594l4.266-4.266c.562-.562 1.547-.562 2.11 0l1.874 1.875z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'fdb8981b5146bf8bcca8c54dbf918453__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartAreaXlBoldIcon);
exports.default = ForwardRef;
