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
const LabelPairedBankLgFillIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 20, height: 30, viewBox: '0 0 20 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M9.492 5.617a1.4 1.4 0 0 1 .977 0l8.75 3.75c.547.235.86.82.742 1.406a1.216 1.216 0 0 1-1.211.977v.313c0 .546-.43.937-.937.937H2.188c-.547 0-.938-.39-.938-.937v-.313c-.625 0-1.133-.39-1.25-.977a1.26 1.26 0 0 1 .742-1.406zM5 14.25v7.5h1.563v-7.5h2.5v7.5h1.874v-7.5h2.5v7.5H15v-7.5h2.46v7.695c.04 0 .08 0 .08.04l1.874 1.25c.469.312.664.859.508 1.406a1.22 1.22 0 0 1-1.172.859H1.25c-.586 0-1.055-.352-1.21-.86a1.24 1.24 0 0 1 .507-1.406l1.875-1.25c0-.039.039-.039.078-.039V14.25zM10 8c-.703 0-1.25.586-1.25 1.25 0 .703.547 1.25 1.25 1.25.664 0 1.25-.547 1.25-1.25C11.25 8.586 10.664 8 10 8' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'de466c29d10ed4d2fbc7429864f52a40__a' },
            React.createElement("path", { d: 'M0 0h20v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedBankLgFillIcon);
exports.default = ForwardRef;
