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
const LabelPairedCameraSmBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 14, height: 22, viewBox: '0 0 14 22', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M5.441 4.625h3.09a1.56 1.56 0 0 1 1.477 1.066l.219.684h2.023c.957 0 1.75.793 1.75 1.75v7c0 .984-.793 1.75-1.75 1.75H1.75c-.984 0-1.75-.766-1.75-1.75v-7c0-.957.766-1.75 1.75-1.75h1.996l.246-.684.602.192-.602-.192a1.53 1.53 0 0 1 1.45-1.066m-.218 1.477L4.84 7.25c-.082.273-.328.438-.63.438H1.75a.45.45 0 0 0-.437.437v7c0 .246.19.438.437.438h10.5a.45.45 0 0 0 .438-.438v-7a.47.47 0 0 0-.438-.437H9.762c-.301 0-.547-.165-.63-.438L8.75 6.102a.24.24 0 0 0-.219-.165h-3.09a.24.24 0 0 0-.218.165M7 14.688a3.01 3.01 0 0 1-2.652-1.532 2.94 2.94 0 0 1 0-3.062A3.07 3.07 0 0 1 7 8.563c1.094 0 2.078.601 2.625 1.53a2.94 2.94 0 0 1 0 3.063A3 3 0 0 1 7 14.687m-1.75-3.063c0 .629.328 1.203.875 1.531.52.301 1.203.301 1.75 0 .52-.328.875-.902.875-1.531 0-.602-.355-1.176-.875-1.504-.547-.3-1.23-.3-1.75 0a1.77 1.77 0 0 0-.875 1.504' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'a8781603684abee748f32e71e0159fd8__a' },
            React.createElement("path", { d: 'M0 0h14v22H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedCameraSmBoldIcon);
exports.default = ForwardRef;
