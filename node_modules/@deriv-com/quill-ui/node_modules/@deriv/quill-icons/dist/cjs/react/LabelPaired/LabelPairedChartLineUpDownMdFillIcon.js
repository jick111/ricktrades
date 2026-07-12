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
const LabelPairedChartLineUpDownMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 6v10.5c0 .281.219.5.5.5H15c.531 0 1 .469 1 1 0 .563-.469 1-1 1H2.5A2.47 2.47 0 0 1 0 16.5V6c0-.531.438-1 1-1 .531 0 1 .469 1 1m9.781 1.813-.594-.594a.7.7 0 0 1-.187-.5c0-.375.313-.719.688-.719H14.5c.25 0 .5.25.5.5v2.813c0 .374-.344.687-.719.687a.7.7 0 0 1-.5-.187l-.594-.594-3.5 3.5a.964.964 0 0 1-1.406 0L6.5 10.938l-1.812 1.78a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405l2.5-2.5a.964.964 0 0 1 1.407 0L9 10.593zm2 4.406a.74.74 0 0 1 .5-.219c.406 0 .719.344.719.719V15.5c0 .281-.25.5-.5.5h-2.812a.694.694 0 0 1-.688-.687.7.7 0 0 1 .188-.5l.593-.594-1.094-1.094 1.438-1.406 1.063 1.094z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a521b19123432268dcf015e90f6e1d6a__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChartLineUpDownMdFillIcon);
exports.default = ForwardRef;
