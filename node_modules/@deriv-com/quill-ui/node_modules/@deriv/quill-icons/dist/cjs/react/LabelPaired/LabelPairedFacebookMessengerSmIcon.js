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
const LabelPairedFacebookMessengerSmIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7 3.969c3.828 0 6.781 2.816 6.781 6.59 0 4.785-4.566 7.464-8.75 6.316-.246-.055-.273 0-1.695.629-.191.055-.383.055-.52-.055-.164-.082-.246-.246-.246-.437-.054-1.258 0-1.367-.218-1.586C1.012 14.25.219 12.527.219 10.559c0-3.774 2.953-6.59 6.781-6.59m4.074 5.086c.192-.301-.164-.657-.465-.438L8.477 10.23c-.165.11-.356.11-.493 0L6.398 9.055c-.246-.164-.52-.246-.793-.192a.96.96 0 0 0-.683.465l-1.996 3.145c-.192.3.164.656.465.437l2.132-1.613c.165-.11.356-.11.493 0l1.586 1.176c.246.164.52.246.82.191a.96.96 0 0 0 .656-.465z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0f4a03dee6b1f901bec3dee627797586__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFacebookMessengerSmIcon);
exports.default = ForwardRef;
