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
const LabelPairedBasketShoppingLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 30, viewBox: '0 0 23 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M10.133 6.906 6.93 13h9.101l-3.203-6.094c-.234-.468-.039-1.054.39-1.289.47-.234 1.055-.039 1.29.39L18.14 13H21.5c.664 0 1.25.586 1.25 1.25 0 .703-.586 1.25-1.25 1.25l-2.031 8.125c-.274 1.094-1.29 1.875-2.422 1.875H5.953c-1.172 0-2.148-.781-2.46-1.875L1.5 15.5c-.703 0-1.25-.547-1.25-1.25C.25 13.586.797 13 1.5 13h3.32l3.633-6.992c.235-.43.82-.625 1.29-.39.429.234.624.82.39 1.288M7.75 17.375c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625zm3.75-.625a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625v-3.75c0-.312-.312-.625-.625-.625m5 .625c0-.312-.312-.625-.625-.625a.64.64 0 0 0-.625.625v3.75c0 .352.273.625.625.625a.64.64 0 0 0 .625-.625z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '41d40a5517ce088e90820f333963724e__a' },
            React.createElement("path", { d: 'M0 0h23v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBasketShoppingLgFillIcon);
exports.default = ForwardRef;
