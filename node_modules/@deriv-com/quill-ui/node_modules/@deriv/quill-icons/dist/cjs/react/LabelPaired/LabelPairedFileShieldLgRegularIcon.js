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
const LabelPairedFileShieldLgRegularIcon = ({ title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', width: 23, height: 30, viewBox: '0 0 23 30', role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", null,
        React.createElement("path", { d: 'M12.75 24.25h.117a8.4 8.4 0 0 0 1.055.977 2.5 2.5 0 0 1-1.172.312h-10a2.49 2.49 0 0 1-2.5-2.5V8c0-1.367 1.094-2.5 2.5-2.5h6.094c.469 0 .976.234 1.328.586l4.492 4.492c.352.352.586.86.586 1.328v1.68l-1.25.508V13H9.625a1.85 1.85 0 0 1-1.875-1.875V6.75h-5c-.703 0-1.25.586-1.25 1.25v15c0 .703.547 1.25 1.25 1.25zm1.21-12.5c-.038-.078-.077-.195-.155-.273L9.273 6.945c-.078-.078-.195-.117-.273-.156v4.336c0 .352.273.625.625.625zm-1.21 5.547c.04 2.07.86 5.039 3.75 6.64v-8.164zm8.75 0-3.75-1.524v8.165c2.852-1.602 3.672-4.57 3.71-6.641zm-4.023-2.969 4.687 1.875c.352.156.586.508.586.86 0 2.5-1.016 6.601-5.273 8.398a1.2 1.2 0 0 1-.743 0c-4.257-1.797-5.234-5.898-5.234-8.398 0-.352.234-.704.586-.86l4.687-1.875a.97.97 0 0 1 .665 0z' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '205a9b26d1bb744be9d6601897480a3c__a' },
            React.createElement("path", { d: 'M0 0h23v30H0z' })))));
const ForwardRef = (0, react_1.forwardRef)(LabelPairedFileShieldLgRegularIcon);
exports.default = ForwardRef;
