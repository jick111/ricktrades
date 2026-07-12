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
const LabelPairedLightChartLineUpDownClockMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 6c0-.531.438-1 1-1 .531 0 1 .469 1 1v10.5c0 .281.219.5.5.5h7.688c.218.75.562 1.438 1.062 2H2.5A2.47 2.47 0 0 1 0 16.5zm3.281 5.313 2.5-2.5a.964.964 0 0 1 1.407 0L9 10.593l2.781-2.78-.594-.594a.7.7 0 0 1-.187-.5c0-.375.313-.719.688-.719H14.5c.25 0 .5.25.5.5v2.813c0 .374-.344.687-.719.687a.7.7 0 0 1-.5-.187l-.594-.594-3.5 3.5a.964.964 0 0 1-1.406 0L6.5 10.938l-1.812 1.78a.964.964 0 0 1-1.407 0 .964.964 0 0 1 0-1.405M11 15.5c0-2.469 2-4.5 4.5-4.5 2.469 0 4.5 2.031 4.5 4.5 0 2.5-2.031 4.5-4.5 4.5-2.5 0-4.5-2-4.5-4.5m4-2v2c0 .281.219.5.5.5H17c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5h-1v-1.5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '8e88b054920a5220131366efca00b9f1__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedLightChartLineUpDownClockMdFillIcon);
exports.default = ForwardRef;
