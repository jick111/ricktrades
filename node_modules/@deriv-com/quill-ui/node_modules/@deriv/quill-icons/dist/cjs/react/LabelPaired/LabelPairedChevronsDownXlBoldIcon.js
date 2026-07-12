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
const LabelPairedChevronsDownXlBoldIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 24, height: 36, viewBox: '0 0 24 36', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'm11.203 27.797-9-9c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0L12 25.453l8.203-8.203c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547l-9.047 9a1.027 1.027 0 0 1-1.547 0m-9-18c-.469-.422-.469-1.125 0-1.594.422-.422 1.125-.422 1.594 0L12 16.453l8.203-8.203c.422-.469 1.125-.469 1.594 0a1.103 1.103 0 0 1 0 1.547l-9.047 9a1.027 1.027 0 0 1-1.547 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '825731e09e164c193f952becd628dcdf__a' },
            React.createElement("path", { d: 'M0 0h24v36H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedChevronsDownXlBoldIcon);
exports.default = ForwardRef;
