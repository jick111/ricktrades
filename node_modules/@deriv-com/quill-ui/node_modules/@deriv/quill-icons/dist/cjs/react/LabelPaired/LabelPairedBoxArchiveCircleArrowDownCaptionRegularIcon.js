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
const LabelPairedBoxArchiveCircleArrowDownCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 15, height: 18, viewBox: '0 0 15 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 5c0-.398.328-.75.75-.75h10.5c.398 0 .75.352.75.75v1.5c0 .422-.352.75-.75.75H.75A.74.74 0 0 1 0 6.5zm.75 0v1.5h10.5V5zm0 3h.75v5.25c0 .422.328.75.75.75h5.695c.14.281.305.54.492.75H2.25a1.48 1.48 0 0 1-1.5-1.5zm3 1.125c0-.187.164-.375.375-.375h3.75c.188 0 .375.188.375.375 0 .21-.187.375-.375.375h-3.75a.37.37 0 0 1-.375-.375m4.945 1.313a3.4 3.4 0 0 1 2.93-1.688c1.195 0 2.32.656 2.906 1.688a3.34 3.34 0 0 1 0 3.374 3.32 3.32 0 0 1-2.906 1.688 3.36 3.36 0 0 1-2.93-1.687 3.34 3.34 0 0 1 0-3.376m.657.374a2.626 2.626 0 0 0 4.546 2.626 2.63 2.63 0 0 0 0-2.626A2.66 2.66 0 0 0 11.625 9.5c-.937 0-1.805.516-2.273 1.313m.68 1.243c.14-.14.398-.14.538 0 .211.234.446.445.68.68v-2.11c0-.187.164-.375.375-.375.188 0 .375.188.375.375v2.11c.21-.235.445-.446.656-.68.14-.14.399-.14.54 0 .14.14.14.398 0 .539-.446.422-.868.867-1.313 1.312a.397.397 0 0 1-.54 0c-.421-.445-.866-.89-1.312-1.312a.397.397 0 0 1 0-.54M10.5 8h.75v.023c-.258.024-.516.07-.75.141z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '6a00bf9549087ef47fd19649ee881088__a' },
            React.createElement("path", { d: 'M0 0h15v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBoxArchiveCircleArrowDownCaptionRegularIcon);
exports.default = ForwardRef;
