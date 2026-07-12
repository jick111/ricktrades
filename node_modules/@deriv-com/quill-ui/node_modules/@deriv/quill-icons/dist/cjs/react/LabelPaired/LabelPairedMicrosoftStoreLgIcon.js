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
const LabelPairedMicrosoftStoreLgIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 30, viewBox: '0 0 24 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M8.074 10.5V8.273c0-1.367.703-1.796 2.031-2.109 1.993-.469 2.11.82 2.11 1.64V9.68l.508-.078V7.844c0-1.563-.508-2.696-2.696-2.188-1.21.235-2.422.547-2.422 2.578v2.383zm5.117-3.086c-.039-.195-.078-.351-.078-.508 1.524-.195 1.797.235 1.797 1.953v.313l-.469.078v-.469c0-1.054 0-1.562-1.25-1.367m-2.93 1.914c0-1.562.626-1.797 1.407-2.07.039.156.078.312.078.508-.703.312-.976.507-.976 1.562v.664l-.508.078zm-6.327 2.617L17.332 9.25l2.695.977v13.125l-2.695.976-13.398-2.656zm2.89 7.305 2.969.39v-2.85H6.824zm0-2.852h2.969v-2.695l-2.969.43zm3.36 3.282 3.75.547v-3.438h-3.75zm0-3.282h3.75v-3.242l-3.75.547z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'c419d67c8796cbe8ab2f21744b4cf5e6__a' },
            React.createElement("path", { d: 'M0 0h24v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedMicrosoftStoreLgIcon);
exports.default = ForwardRef;
