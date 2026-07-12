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
exports.StandaloneCircleDollarRegularIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const StandaloneCircleDollarRegularIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 32 32', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { d: 'M24.75 16.5c0-3.125-1.68-5.977-4.375-7.54-2.734-1.6-6.055-1.6-8.75 0A8.63 8.63 0 0 0 7.25 16.5c0 3.164 1.64 6.016 4.375 7.578 2.695 1.602 6.016 1.602 8.75 0A8.73 8.73 0 0 0 24.75 16.5M6 16.5a9.93 9.93 0 0 1 5-8.633c3.086-1.797 6.875-1.797 10 0 3.086 1.797 5 5.078 5 8.633 0 3.594-1.914 6.875-5 8.672-3.125 1.797-6.914 1.797-10 0-3.125-1.797-5-5.078-5-8.672m10.625-5.312v.898c.508.039 1.016.195 1.523.351.079 0 .118.04.196.04.312.078.508.43.43.78-.079.313-.43.509-.782.43-.078-.039-.195-.039-.273-.078-.274-.078-.586-.195-.899-.234-.742-.078-1.406 0-1.914.195-.508.235-.742.547-.781.782-.078.39.078.625.39.859.43.234 1.055.43 1.797.625v.039c.704.195 1.524.43 2.149.82.742.508 1.055 1.328.898 2.227-.156.82-.742 1.406-1.484 1.68-.352.156-.82.273-1.29.273v.938a.617.617 0 0 1-.624.625.64.64 0 0 1-.625-.625v-.977c-.313-.078-.82-.234-1.25-.352l-.82-.234a.654.654 0 0 1-.391-.82c.117-.313.469-.47.781-.39.274.077.508.194.781.273.43.117.899.234 1.094.273.781.117 1.446.039 1.875-.117.43-.196.664-.469.742-.782.04-.43-.078-.742-.43-.976-.468-.313-1.015-.469-1.6-.625a.56.56 0 0 1-.235-.078c-.703-.156-1.445-.39-2.031-.781-.313-.196-.625-.47-.82-.82-.196-.391-.235-.821-.157-1.29.156-.82.781-1.367 1.523-1.68.274-.117.625-.234.938-.273v-.976c0-.313.273-.626.625-.626.351 0 .625.313.625.626z' })));
exports.StandaloneCircleDollarRegularIcon = StandaloneCircleDollarRegularIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.StandaloneCircleDollarRegularIcon);
exports.default = ForwardRef;
