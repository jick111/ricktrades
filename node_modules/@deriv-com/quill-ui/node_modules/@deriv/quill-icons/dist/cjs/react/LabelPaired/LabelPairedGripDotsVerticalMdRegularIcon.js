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
const LabelPairedGripDotsVerticalMdRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 8, height: 24, viewBox: '0 0 8 24', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M2 7c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5.25 0 .5-.219.5-.5M0 7c0-.531.281-1 .75-1.281.438-.282 1.031-.282 1.5 0C2.688 6 3 6.469 3 7c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 0 7m2 5c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5.25 0 .5-.219.5-.5m-2 0c0-.531.281-1 .75-1.281.438-.281 1.031-.281 1.5 0C2.688 11 3 11.469 3 12c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 0 12m1.5 5.5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5m0-2c.531 0 1 .313 1.281.75.281.469.281 1.063 0 1.5-.281.469-.75.75-1.281.75a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75M7 7c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5.25 0 .5-.219.5-.5M5 7c0-.531.281-1 .75-1.281.438-.282 1.031-.282 1.5 0C7.688 6 8 6.469 8 7c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 5 7m1.5 5.5c.25 0 .5-.219.5-.5 0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5m0-2c.531 0 1 .313 1.281.75.282.469.282 1.063 0 1.5-.281.469-.75.75-1.281.75a1.5 1.5 0 0 1-1.312-.75c-.282-.437-.282-1.031 0-1.5.28-.437.75-.75 1.312-.75M7 17c0-.25-.25-.5-.5-.5-.281 0-.5.25-.5.5 0 .281.219.5.5.5.25 0 .5-.219.5-.5m-2 0c0-.531.281-1 .75-1.281.438-.281 1.031-.281 1.5 0C7.688 16 8 16.469 8 17c0 .563-.312 1.031-.75 1.313-.469.28-1.062.28-1.5 0A1.5 1.5 0 0 1 5 17' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: 'bea0b83c283b2f4dd6d8298fcc6c04bc__a' },
            React.createElement("path", { d: 'M0 0h8v24H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedGripDotsVerticalMdRegularIcon);
exports.default = ForwardRef;
