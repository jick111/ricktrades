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
exports.LegacyNotificationIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyNotificationIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("path", { fill: '#333', d: 'M11 20.049c0 .539.5.975 1 .975.464 0 .929-.376.993-.861l.007-.114zm1-17.073c-.278 0-.5.216-.5.487v1.929l-.788.166C7.984 6.135 6 8.506 6 11.268v6.258l-1.586 1.547 15.169-.003L18 17.526v-6.258c0-2.762-1.984-5.133-4.712-5.71l-.788-.166V3.463a.49.49 0 0 0-.5-.487M12 22c-1.014 0-1.915-.804-1.994-1.807L10 20.05H4.41c-.89 0-1.33-1.054-.7-1.668L5 17.122v-5.854c0-3.268 2.36-6 5.5-6.663V3.463C10.5 2.653 11.17 2 12 2s1.5.654 1.5 1.463v1.142C16.64 5.268 19 8 19 11.268v5.854l1.29 1.259c.63.614.18 1.668-.71 1.668H14C14 21.117 13.063 22 12 22' })));
exports.LegacyNotificationIcon = LegacyNotificationIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyNotificationIcon);
exports.default = ForwardRef;
