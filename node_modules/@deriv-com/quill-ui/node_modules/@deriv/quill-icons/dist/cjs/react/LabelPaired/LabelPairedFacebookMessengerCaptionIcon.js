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
const LabelPairedFacebookMessengerCaptionIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M6 3.688c3.281 0 5.813 2.414 5.813 5.648 0 4.102-3.915 6.398-7.5 5.414-.211-.047-.235 0-1.454.54-.164.046-.328.046-.445-.048-.14-.07-.21-.21-.21-.375-.048-1.078 0-1.172-.188-1.36C.867 12.5.188 11.024.188 9.337c0-3.234 2.53-5.648 5.812-5.648m3.492 4.359c.164-.258-.14-.563-.398-.375L7.266 9.055c-.141.093-.305.093-.422 0l-1.36-1.008c-.21-.14-.445-.211-.68-.164a.82.82 0 0 0-.585.398l-1.711 2.696c-.164.257.14.562.398.375l1.828-1.383c.141-.094.305-.094.422 0l1.36 1.008c.21.14.445.21.703.164a.82.82 0 0 0 .562-.399z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '055501b831fb4f33e354cf870345f921__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFacebookMessengerCaptionIcon);
exports.default = ForwardRef;
