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
const LabelPairedPenLineCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 18, viewBox: '0 0 14 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm.555 13.79.539-1.83c.093-.327.281-.632.515-.866l7.125-7.125a1.514 1.514 0 0 1 2.133 0l.914.914c.07.07.14.164.188.234a1.495 1.495 0 0 1-.188 1.899L4.656 14.14c-.023.023-.07.046-.093.093a2.5 2.5 0 0 1-.774.422l-1.828.54-1.008.28a.48.48 0 0 1-.539-.14.48.48 0 0 1-.14-.54zm1.453-.962-.375 1.29 1.289-.376.539-.164a.86.86 0 0 0 .398-.234l5.368-5.367-1.454-1.454-5.367 5.368c-.023 0-.023.023-.047.046-.093.094-.14.211-.187.352zm4.055 1.547h7.125a.57.57 0 0 1 .562.563.555.555 0 0 1-.562.562H6.062a.54.54 0 0 1-.562-.562c0-.305.234-.563.563-.563' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '74c7379f1edca595e087910d67e04ed7__a' },
            React.createElement("path", { d: 'M0 0h14v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedPenLineCaptionBoldIcon);
exports.default = ForwardRef;
