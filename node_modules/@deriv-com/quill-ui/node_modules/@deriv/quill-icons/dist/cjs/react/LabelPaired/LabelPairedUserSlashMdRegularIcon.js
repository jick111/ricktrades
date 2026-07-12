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
const LabelPairedUserSlashMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M14 8a3.98 3.98 0 0 1-1.719 3.281l-.812-.656A3.01 3.01 0 0 0 13 8a3 3 0 0 0-3-3c-1.375 0-2.531.938-2.906 2.188L6.28 6.53C6.844 5.063 8.313 4 10 4c2.188 0 4 1.813 4 4m1.625 11 1 .813a.87.87 0 0 1-.562.187H3.906A.907.907 0 0 1 3 19.094C3 16 5.469 13.5 8.563 13.5h.093l1.281 1H8.564A4.575 4.575 0 0 0 4 19zM.781 4.125l19.032 15c.187.156.25.5.062.688a.467.467 0 0 1-.687.093l-19-15c-.22-.156-.282-.5-.094-.687.156-.219.5-.282.687-.094' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0bb9253427e688b7482267124d6a935d__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUserSlashMdRegularIcon);
exports.default = ForwardRef;
