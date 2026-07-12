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
const LabelPairedCircleDollarCaptionFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6 15.5a5.97 5.97 0 0 1-5.203-3 5.97 5.97 0 0 1 0-6A6.01 6.01 0 0 1 6 3.5a6 6 0 0 1 5.18 3 5.97 5.97 0 0 1 0 6 5.96 5.96 0 0 1-5.18 3m.469-8.86a.5.5 0 0 0-.492-.515.52.52 0 0 0-.516.516v.375c-.14.046-.281.07-.399.14-.421.188-.82.516-.914 1.032-.093.539.118 1.03.586 1.312.329.21.774.352 1.125.445.047.024.118.024.164.047.282.07.563.164.797.305.282.187.164.539-.117.656-.21.07-.539.117-.937.047-.282-.047-.54-.14-.797-.21-.07-.024-.117-.048-.188-.071-.258-.094-.539.047-.633.328a.497.497 0 0 0 .305.633c.352.117.68.21 1.008.304v.399a.52.52 0 0 0 .516.515.5.5 0 0 0 .492-.515v-.352c.21-.023.422-.07.61-.14.421-.188.796-.54.89-1.055a1.34 1.34 0 0 0-.563-1.36c-.351-.234-.82-.374-1.195-.492-.047 0-.094-.023-.164-.023-.258-.094-.54-.164-.774-.305-.28-.187-.07-.469.188-.562.281-.14.633-.164.96-.094.165.023.329.07.493.117.024 0 .07.024.094.024.281.07.562-.07.633-.352.07-.258-.094-.539-.352-.633-.047 0-.094-.023-.14-.023a3.2 3.2 0 0 0-.68-.164z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'd114a5d7255797f84a9e3ceda66dba54__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCircleDollarCaptionFillIcon);
exports.default = ForwardRef;
