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
const LabelPairedChartAreaXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.5 8.25v16.5c0 1.266.984 2.25 2.25 2.25h19.5c.375 0 .75.375.75.75 0 .422-.375.75-.75.75H3.75C1.64 28.5 0 26.86 0 24.75V8.25c0-.375.328-.75.75-.75.375 0 .75.375.75.75m12.422 7.828L10.5 12.656l-4.312 4.266c-.141.14-.188.328-.188.515V22.5h15v-4.406c0-.188-.094-.328-.187-.469l-2.907-3.422-1.875 1.875A1.45 1.45 0 0 1 15 16.5c-.422 0-.797-.14-1.078-.422m0-2.11L15 15l1.031-1.031.797-.797c.61-.61 1.64-.563 2.203.094l2.907 3.375c.328.422.562.937.562 1.453V22.5c0 .844-.703 1.5-1.5 1.5H6a1.48 1.48 0 0 1-1.5-1.5v-5.062c0-.563.234-1.172.656-1.594l4.266-4.266c.562-.562 1.547-.562 2.11 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'e205f2680a9b91f9438e19472d83da96__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartAreaXlRegularIcon);
exports.default = ForwardRef;
