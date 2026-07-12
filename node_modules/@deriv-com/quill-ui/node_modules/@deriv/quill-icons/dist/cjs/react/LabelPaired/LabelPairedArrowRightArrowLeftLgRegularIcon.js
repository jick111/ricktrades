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
const LabelPairedArrowRightArrowLeftLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 30, viewBox: '0 0 18 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm17.555 10.969-3.75 3.75a.66.66 0 0 1-.899 0 .66.66 0 0 1 0-.899l2.696-2.695H.875A.617.617 0 0 1 .25 10.5c0-.312.273-.625.625-.625h14.727l-2.696-2.656a.66.66 0 0 1 0-.899.66.66 0 0 1 .899 0l3.75 3.75a.66.66 0 0 1 0 .899M4.156 24.719l-3.75-3.75a.66.66 0 0 1 0-.899l3.75-3.75a.66.66 0 0 1 .899 0 .66.66 0 0 1 0 .899l-2.696 2.656h14.766c.313 0 .625.313.625.625a.64.64 0 0 1-.625.625H2.359l2.696 2.695a.66.66 0 0 1 0 .899.66.66 0 0 1-.899 0' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '621d5615a944f2d5a57ea5fb864d88dc__a' },
            React.createElement("path", { d: 'M0 0h18v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedArrowRightArrowLeftLgRegularIcon);
exports.default = ForwardRef;
