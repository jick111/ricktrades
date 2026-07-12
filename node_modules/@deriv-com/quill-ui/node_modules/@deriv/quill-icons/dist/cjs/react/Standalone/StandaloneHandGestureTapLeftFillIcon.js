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
exports.StandaloneHandGestureTapLeftFillIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneHandGestureTapLeftFillIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M11.43 13.96c.508-.233 1.093 0 1.328.47l1.562 3.28c.078-.273.274-.468.547-.624a1.207 1.207 0 0 1 1.524.508c.117-.274.312-.508.586-.625a1.11 1.11 0 0 1 1.484.508c.117-.274.312-.508.625-.665.547-.273 1.289 0 1.562.586l.977 2.11c.742 1.562.078 3.437-1.484 4.14l-2.618 1.25c-.82.391-1.757.508-2.617.274l-.156-.04a3.06 3.06 0 0 1-2.07-1.718l-.39-.82a1.58 1.58 0 0 1 0-1.328l.233-.547c.04-.04.079-.117.118-.157l.547 1.211a.45.45 0 0 0 .546.196c.157-.078.274-.313.157-.508l-2.93-6.211a.95.95 0 0 1 .469-1.29m2.5 1.642c.195-.352.312-.782.312-1.211 0-1.368-1.133-2.5-2.5-2.5a2.52 2.52 0 0 0-2.5 2.5 2.52 2.52 0 0 0 1.797 2.422l-.586-1.211a1.616 1.616 0 0 1 .742-2.11c.782-.351 1.72 0 2.11.742zM7.992 7.75c.39 0 .742.352.742.781v15.977c0 .43-.351.742-.742.742a.72.72 0 0 1-.742-.742V8.53c0-.43.313-.781.742-.781' })));
exports.StandaloneHandGestureTapLeftFillIcon = StandaloneHandGestureTapLeftFillIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneHandGestureTapLeftFillIcon);
exports.default = ForwardRef;
