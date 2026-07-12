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
const LabelPairedThumbsDownMdFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 16, height: 24, viewBox: '0 0 16 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.781 19c-.812.156-1.594-.375-1.781-1.187l-.062-.375c-.188-1.032-.782-1.97-1.594-2.625l-.219-.188A2.93 2.93 0 0 1 5 12.281V8.813c0-1 .5-1.938 1.313-2.5L7.53 5.53A2.9 2.9 0 0 1 9.188 5h3.062c.813 0 1.5.688 1.5 1.5 0 .125-.031.25-.062.344a1.472 1.472 0 0 1 .843 2.187c.688.156 1.219.75 1.219 1.469 0 .5-.219.906-.562 1.188.468.25.812.75.812 1.312a1.5 1.5 0 0 1-1.5 1.5H10c.406.75.719 1.531.875 2.375l.094.344c.156.812-.375 1.593-1.188 1.781M1 16c-.562 0-1-.437-1-1V8c0-.531.438-1 1-1h2c.531 0 1 .469 1 1v7c0 .563-.469 1-1 1z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '115f2c3f8407f4d6fee38df0f6c4a5a5__a' },
            React.createElement("path", { d: 'M0 0h16v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedThumbsDownMdFillIcon);
exports.default = ForwardRef;
