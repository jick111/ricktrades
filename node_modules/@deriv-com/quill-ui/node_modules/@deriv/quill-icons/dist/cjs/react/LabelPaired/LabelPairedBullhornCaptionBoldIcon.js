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
const LabelPairedBullhornCaptionBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 12, height: 18, viewBox: '0 0 12 18', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm10.125 5.234-.258.258a7.3 7.3 0 0 1-4.992 2.133v3.023c1.875.024 3.656.797 4.992 2.133l.258.258zM3.75 6.5h.938A6.17 6.17 0 0 0 9.07 4.695l.89-.89c.47-.47 1.29-.14 1.29.539v3.375c.422.21.75.773.75 1.406 0 .656-.328 1.219-.75 1.43v3.375c0 .68-.82 1.008-1.29.539l-.89-.89c-1.125-1.126-2.625-1.782-4.195-1.806v2.415c0 .726-.61 1.312-1.312 1.312h-.75A1.31 1.31 0 0 1 1.5 14.188V11.75a1.48 1.48 0 0 1-1.5-1.5V8c0-.82.656-1.5 1.5-1.5zm-1.125 5.25v2.438c0 .117.07.187.188.187h.75c.093 0 .187-.07.187-.187V11.75zM1.5 7.625A.385.385 0 0 0 1.125 8v2.25c0 .21.164.375.375.375h2.25v-3z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '0a093e12ae3d6ed636017316ede22681__a' },
            React.createElement("path", { d: 'M0 0h12v18H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBullhornCaptionBoldIcon);
exports.default = ForwardRef;
