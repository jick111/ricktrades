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
const LabelPairedSixXlRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 36, viewBox: '0 0 15 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M13.5 21c0-3.281-2.719-6-6-6s-5.953 2.625-6 5.86V21c0 3.328 2.672 6 6 6 3.281 0 6-2.672 6-6m-7.594-7.312c.516-.094 1.032-.188 1.594-.188 4.125 0 7.5 3.375 7.5 7.5 0 4.172-3.375 7.5-7.5 7.5A7.46 7.46 0 0 1 0 21v-.234a7.6 7.6 0 0 1 1.922-4.828L9.188 7.78c.234-.328.75-.328 1.03-.047.329.235.329.75.048 1.032z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'de5789a215395341472c52a8eb4cdff3__a' },
            React.createElement("path", { d: 'M0 0h15v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedSixXlRegularIcon);
exports.default = ForwardRef;
