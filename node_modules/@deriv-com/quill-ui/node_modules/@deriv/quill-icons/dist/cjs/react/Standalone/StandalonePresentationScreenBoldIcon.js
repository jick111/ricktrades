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
exports.StandalonePresentationScreenBoldIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandalonePresentationScreenBoldIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M5.688 6.5h20.625a.95.95 0 0 1 .937.938c0 .546-.43.937-.937.937H5.688c-.547 0-.938-.39-.938-.937 0-.508.39-.938.938-.938M6 9.625h1.875v8.438c0 .195.117.312.313.312h15.625a.31.31 0 0 0 .312-.312V9.625H26v8.438c0 1.21-1.016 2.187-2.187 2.187h-6.915v1.836l2.852 2.852c.39.351.39.937 0 1.289-.352.39-.937.39-1.328 0l-2.461-2.461-2.461 2.46a.856.856 0 0 1-1.29 0 .856.856 0 0 1 0-1.288l2.852-2.852V20.25H8.189A2.184 2.184 0 0 1 6 18.063z' })));
exports.StandalonePresentationScreenBoldIcon = StandalonePresentationScreenBoldIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandalonePresentationScreenBoldIcon);
exports.default = ForwardRef;
