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
const LabelPairedWalletSignalMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 24, viewBox: '0 0 20 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M0 7.5C0 6.125 1.094 5 2.5 5h12c.25 0 .5.25.5.5 0 .281-.25.5-.5.5h-12A1.5 1.5 0 0 0 1 7.5v9c0 .844.656 1.5 1.5 1.5H11v1H2.5A2.47 2.47 0 0 1 0 16.5zm3 0c0-.25.219-.5.5-.5h10C14.875 7 16 8.125 16 9.5v2.188c-.344-.157-.656-.25-1-.376v-1.78a1.5 1.5 0 0 0-1.5-1.5h-10c-.281 0-.5-.25-.5-.5zm9 5c0-.25.219-.5.5-.5 4.125 0 7.5 3.375 7.5 7.5 0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5c0-3.562-2.937-6.5-6.5-6.5a.494.494 0 0 1-.5-.5m0 3c0-.25.219-.5.5-.5 2.469 0 4.5 2.031 4.5 4.5 0 .281-.25.5-.5.5a.494.494 0 0 1-.5-.5c0-1.906-1.594-3.5-3.5-3.5a.494.494 0 0 1-.5-.5m0 3.5c0-.531.438-1 1-1 .531 0 1 .469 1 1 0 .563-.469 1-1 1-.562 0-1-.437-1-1' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '689619219b12b8410d6c217e09a481dd__a' },
            React.createElement("path", { d: 'M0 0h20v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedWalletSignalMdRegularIcon);
exports.default = ForwardRef;
