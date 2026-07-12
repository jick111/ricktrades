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
const LabelPairedRightToBracketCaptionRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M7.477 9.547S7.5 9.523 7.5 9.5l-.023-.023-3.094-2.93a.18.18 0 0 0-.117-.047c-.07 0-.141.07-.141.164V8c0 .21-.187.375-.375.375H.938a.185.185 0 0 0-.188.188v1.874c0 .118.07.188.188.188H3.75c.188 0 .375.188.375.375v1.36c0 .07.07.14.14.14.048 0 .094 0 .118-.023zM8.25 9.5a.85.85 0 0 1-.258.61l-3.094 2.906c-.164.164-.398.234-.632.234a.89.89 0 0 1-.891-.89v-.985H.938A.91.91 0 0 1 0 10.438V8.562c0-.515.398-.937.938-.937h2.437v-.96c0-.493.398-.915.89-.915.235 0 .47.094.633.258l3.094 2.906a.84.84 0 0 1 .258.586M7.875 14h2.25c.61 0 1.125-.492 1.125-1.125v-6.75A1.14 1.14 0 0 0 10.125 5h-2.25a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375h2.25A1.88 1.88 0 0 1 12 6.125v6.75a1.866 1.866 0 0 1-1.875 1.875h-2.25a.37.37 0 0 1-.375-.375c0-.187.164-.375.375-.375' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '021e13a4a4321deb6836807579b5e5fe__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedRightToBracketCaptionRegularIcon);
exports.default = ForwardRef;
