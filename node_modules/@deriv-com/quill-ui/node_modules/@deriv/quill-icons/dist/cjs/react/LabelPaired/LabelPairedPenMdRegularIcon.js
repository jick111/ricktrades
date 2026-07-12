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
const LabelPairedPenMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm12.344 5.25-1.688 1.719 2.375 2.375 1.719-1.688c.281-.312.281-.781 0-1.062L13.406 5.25c-.281-.281-.75-.281-1.062 0M9.938 7.656l-7.344 7.375c-.25.219-.438.531-.531.844l-.844 2.906 2.906-.875c.313-.093.625-.25.844-.5l7.375-7.343zm4.187-3.125 1.344 1.344a1.794 1.794 0 0 1 0 2.469l-9.781 9.781c-.375.344-.813.625-1.282.75L.625 20c-.187.031-.375 0-.5-.125s-.156-.312-.125-.5l1.125-3.781c.125-.469.406-.906.75-1.281l9.781-9.782a1.794 1.794 0 0 1 2.469 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'bfeb3c7befbc1293df1cf36472e112ce__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPenMdRegularIcon);
exports.default = ForwardRef;
