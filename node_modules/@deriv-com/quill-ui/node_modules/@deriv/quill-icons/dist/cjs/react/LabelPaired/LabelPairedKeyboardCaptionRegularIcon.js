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
const LabelPairedKeyboardCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M1.75 5.75A.755.755 0 0 0 1 6.5v6c0 .422.328.75.75.75h10.5c.398 0 .75-.328.75-.75v-6a.77.77 0 0 0-.75-.75zm-1.5.75c0-.82.656-1.5 1.5-1.5h10.5c.82 0 1.5.68 1.5 1.5v6c0 .844-.68 1.5-1.5 1.5H1.75a1.48 1.48 0 0 1-1.5-1.5zm2.063.188h.374c.188 0 .376.187.376.375v.375c0 .21-.188.375-.376.375h-.374a.37.37 0 0 1-.376-.375v-.375c0-.188.165-.375.375-.375m-.376 2.625c0-.188.165-.376.375-.376h.376c.187 0 .374.188.374.376v.374c0 .211-.187.376-.374.376h-.376a.37.37 0 0 1-.374-.376zm.375 1.874h.376c.187 0 .374.188.374.376v.374c0 .211-.187.376-.374.376h-.376a.37.37 0 0 1-.374-.376v-.374c0-.188.164-.376.375-.376m1.876-4.124c0-.188.164-.375.375-.375h.375c.187 0 .375.187.375.375v.375c0 .21-.188.375-.375.375h-.375a.37.37 0 0 1-.375-.375zm.375 1.875h.375c.187 0 .375.187.375.374v.376c0 .21-.188.374-.375.374h-.375a.37.37 0 0 1-.375-.374v-.376c0-.187.164-.374.375-.374m1.875-1.876c0-.187.164-.375.375-.375h.375c.187 0 .375.188.375.375v.375c0 .211-.188.375-.375.375h-.375a.37.37 0 0 1-.375-.375zm.375 1.875h.375c.187 0 .375.188.375.376v.374c0 .211-.188.376-.375.376h-.375a.37.37 0 0 1-.375-.376v-.374c0-.188.164-.376.375-.376m1.875-1.874c0-.188.164-.375.374-.375h.376c.187 0 .374.187.374.375v.375c0 .21-.187.375-.374.375h-.376a.37.37 0 0 1-.374-.375zm.374 1.875h.376c.187 0 .374.187.374.374v.376c0 .21-.187.374-.374.374h-.376a.37.37 0 0 1-.374-.374v-.376c0-.187.164-.374.374-.374m1.876-1.876c0-.187.164-.375.374-.375h.376c.187 0 .374.188.374.375v.375c0 .211-.187.375-.374.375h-.376a.37.37 0 0 1-.374-.375zm.374 1.875h.376c.187 0 .374.188.374.376v.374c0 .211-.187.376-.374.376h-.376a.37.37 0 0 1-.374-.376v-.374c0-.188.164-.376.374-.376m-.374 2.626c0-.188.164-.376.374-.376h.376c.187 0 .374.188.374.376v.374c0 .211-.187.376-.374.376h-.376a.37.37 0 0 1-.374-.376zm-6.563-.188h5.25c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-5.25A.37.37 0 0 1 4 11.75c0-.187.164-.375.375-.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '5d754eb6e0a1f0ab45383d3f5d3a522a__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedKeyboardCaptionRegularIcon);
exports.default = ForwardRef;
