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
const LabelPairedGlobeSmFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.625 10.75c0 .629-.055 1.203-.11 1.75H4.458a18 18 0 0 1-.082-1.75c0-.602.027-1.176.082-1.75h5.059c.054.574.109 1.148.109 1.75M10.391 9h3.363A6.3 6.3 0 0 1 14 10.75c0 .629-.082 1.203-.246 1.75H10.39c.054-.547.109-1.148.109-1.75s-.055-1.176-.11-1.75m3.09-.875h-3.2c-.273-1.723-.82-3.2-1.504-4.129 2.133.574 3.883 2.106 4.704 4.129m-4.075 0h-4.84c.164-.984.438-1.86.739-2.57.3-.657.601-1.121.93-1.422.3-.274.546-.383.765-.383.191 0 .438.11.738.383.328.3.63.765.93 1.422.3.71.574 1.586.738 2.57m-5.715 0H.492c.82-2.023 2.57-3.555 4.703-4.129-.683.93-1.23 2.406-1.504 4.129M.22 9h3.363a18 18 0 0 0-.082 1.75c0 .602.027 1.203.082 1.75H.219C.055 11.953 0 11.379 0 10.75 0 10.148.055 9.574.219 9m5.086 6.973a11.4 11.4 0 0 1-.739-2.598h4.84a11.4 11.4 0 0 1-.738 2.598c-.3.656-.602 1.12-.93 1.422-.3.273-.547.355-.738.355-.219 0-.465-.082-.766-.355-.328-.301-.629-.766-.93-1.422M3.69 13.375c.274 1.75.82 3.227 1.504 4.156a7.02 7.02 0 0 1-4.703-4.156zm9.79 0a7.02 7.02 0 0 1-4.704 4.156c.711-.93 1.23-2.406 1.504-4.156z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '2c9240d94a694276de50ba69985cdcd7__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGlobeSmFillIcon);
exports.default = ForwardRef;
