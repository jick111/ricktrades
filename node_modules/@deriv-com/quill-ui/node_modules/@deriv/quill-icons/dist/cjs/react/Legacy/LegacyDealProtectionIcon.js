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
exports.LegacyDealProtectionIcon = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const types_1 = require("../../types");
const LegacyDealProtectionIcon = ({ iconSize = 'md', title, titleId, ...props }, ref) => (React.createElement("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 16 16', ...types_1.sizes[iconSize], role: 'img', ref: ref, "aria-labelledby": titleId, ...props },
    title ? React.createElement("title", { id: titleId }, title) : null,
    React.createElement("g", { clipPath: 'url(#3644d84e65e51d2e6884a32c2c9b04b1__a)' },
        React.createElement("path", { fill: '#333', d: 'M13.5 0a1.5 1.5 0 0 1 1.493 1.356L15 1.5V2h.5a.5.5 0 0 1 .492.41L16 2.5v3a.5.5 0 0 1-.41.492L15.5 6h-1.551c-.33 4.669-2.255 7.689-5.778 8.97a.5.5 0 0 1-.342 0C3.942 13.556 2 10.026 2 4.5a.5.5 0 0 1 .394-.489 9.8 9.8 0 0 0 2.617-.95q1.468-.801 2.644-1.923a.5.5 0 0 1 .69 0 12.4 12.4 0 0 0 2.644 1.923l.011.006V2.5a.5.5 0 0 1 .41-.492L11.5 2h.5v-.5A1.5 1.5 0 0 1 13.5 0M8 2.178l-.31.269a13.6 13.6 0 0 1-2.2 1.492q-.774.422-1.657.715l-.449.139-.381.102.009.326c.148 4.472 1.704 7.313 4.666 8.612l.25.104.072.028.072-.028c2.943-1.174 4.57-3.793 4.875-7.936L11.5 6a.5.5 0 0 1-.492-.41L11 5.5V4.186l-.162-.077-.327-.17a14 14 0 0 1-1.789-1.162l-.412-.33zM8 4a.5.5 0 0 1 .492.41l.008.09v7a.5.5 0 0 1-.992.09L7.5 11.5v-7A.5.5 0 0 1 8 4m7-1h-3v2h3zm-1.5-2a.5.5 0 0 0-.492.41L13 1.5V2h1v-.5a.5.5 0 0 0-.5-.5' })),
    React.createElement("defs", null,
        React.createElement("clipPath", { id: '3644d84e65e51d2e6884a32c2c9b04b1__a' },
            React.createElement("path", { fill: '#fff', d: 'M0 0h16v16H0z' })))));
exports.LegacyDealProtectionIcon = LegacyDealProtectionIcon;
const ForwardRef = (0, react_1.forwardRef)(exports.LegacyDealProtectionIcon);
exports.default = ForwardRef;
