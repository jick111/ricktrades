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
const LabelPairedAndroidXlIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 27, height: 36, viewBox: '0 0 27 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M19.688 20.156a1.11 1.11 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125 1.14 1.14 0 0 0-1.125 1.125 1.11 1.11 0 0 0 1.125 1.125m-12.422 0a1.11 1.11 0 0 0 1.125-1.125 1.14 1.14 0 0 0-1.125-1.125 1.14 1.14 0 0 0-1.125 1.125 1.11 1.11 0 0 0 1.125 1.125m12.843-6.75c3.844 2.11 6.47 6 6.891 10.594H0c.375-4.594 3-8.484 6.844-10.594l-2.25-3.89a.43.43 0 0 1 0-.47q.14-.28.422-.28c.187 0 .328.14.422.28l2.25 3.938a14.23 14.23 0 0 1 11.578 0l2.25-3.937c.093-.14.234-.281.422-.281q.281 0 .421.28a.43.43 0 0 1 0 .47z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'f310dc64ff2825efd5589dc4ffbe7bf6__a' },
            React.createElement("path", { d: 'M0 0h27v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedAndroidXlIcon);
exports.default = ForwardRef;
