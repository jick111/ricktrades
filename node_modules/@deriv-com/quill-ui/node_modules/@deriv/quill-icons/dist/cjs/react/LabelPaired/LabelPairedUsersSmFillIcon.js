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
const LabelPairedUsersSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 18, height: 22, viewBox: '0 0 18 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M4.188 3.75c.765 0 1.476.438 1.886 1.094.383.683.383 1.531 0 2.187-.41.684-1.12 1.094-1.886 1.094-.793 0-1.504-.41-1.915-1.094-.382-.656-.382-1.504 0-2.187.41-.657 1.122-1.094 1.914-1.094m10.062 0c.766 0 1.477.438 1.887 1.094.383.683.383 1.531 0 2.187-.41.684-1.121 1.094-1.887 1.094-.793 0-1.504-.41-1.914-1.094-.383-.656-.383-1.504 0-2.187.41-.657 1.121-1.094 1.914-1.094m-14 8.176C.25 10.312 1.535 9 3.148 9h1.176c.438 0 .848.11 1.23.273-.054.192-.054.41-.054.602 0 1.066.438 1.996 1.176 2.625H.824a.56.56 0 0 1-.574-.574m11.074.574h-.027c.738-.629 1.176-1.559 1.176-2.625 0-.191 0-.41-.028-.602A2.9 2.9 0 0 1 13.648 9h1.176a2.93 2.93 0 0 1 2.926 2.926c0 .328-.273.574-.602.574zM6.375 9.875c0-.93.492-1.777 1.313-2.27a2.65 2.65 0 0 1 2.625 0c.792.493 1.312 1.34 1.312 2.27 0 .957-.52 1.805-1.312 2.297a2.65 2.65 0 0 1-2.626 0 2.65 2.65 0 0 1-1.312-2.297M3.75 17.039c0-2.023 1.613-3.664 3.637-3.664h3.199a3.664 3.664 0 0 1 3.664 3.664c0 .383-.328.711-.738.711H4.46c-.383 0-.711-.3-.711-.71' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a3e9f93cabdf8dd3b9f2720f5194e500__a' },
            React.createElement("path", { d: 'M0 0h18v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedUsersSmFillIcon);
exports.default = ForwardRef;
